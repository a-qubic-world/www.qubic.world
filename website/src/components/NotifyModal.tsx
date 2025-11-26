import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import './NotifyModal.css';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: 'qns' | 'nft' | 'general';
}

export const NotifyModal: React.FC<NotifyModalProps> = ({ isOpen, onClose, defaultProduct = 'general' }) => {
  const [email, setEmail] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([defaultProduct]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const products = [
    { id: 'qns', label: 'QNS Domains' },
    { id: 'nft', label: 'NFT Gallery' },
    { id: 'general', label: 'General Updates' },
  ];

  const toggleProduct = (productId: string) => {
    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(p => p !== productId)
        : [...prev, productId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || selectedProducts.length === 0) {
      setErrorMessage('Please enter email and select at least one product');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Check if user exists
      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('email', email)
        .single();

      let userId: string;

      if (existingUser) {
        userId = existingUser.id;
      } else {
        // Create new user
        const { data: newUser, error: userError } = await supabase
          .from('users')
          .insert({ email })
          .select('id')
          .single();

        if (userError) throw userError;
        userId = newUser.id;
      }

      // Add subscriptions
      const subscriptions = selectedProducts.map(product => ({
        user_id: userId,
        product,
      }));

      const { error: subError } = await supabase
        .from('subscriptions')
        .upsert(subscriptions, { onConflict: 'user_id,product' });

      if (subError) throw subError;

      setStatus('success');
      setEmail('');
      setSelectedProducts([defaultProduct]);

      // Close after success
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);

    } catch (err: any) {
      console.error('Subscription error:', err);
      setErrorMessage(err.message || 'Something went wrong');
      setStatus('error');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="notify-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="notify-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <button className="notify-modal-close" onClick={onClose}>
              &times;
            </button>

            <h2 className="notify-modal-title">Get Notified</h2>
            <p className="notify-modal-subtitle">
              Be the first to know when we launch
            </p>

            {status === 'success' ? (
              <div className="notify-success">
                <span className="notify-success-icon">&#10003;</span>
                <p>You're on the list!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="notify-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="notify-input"
                  disabled={status === 'loading'}
                />

                <div className="notify-products">
                  {products.map(product => (
                    <label key={product.id} className="notify-product">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleProduct(product.id)}
                        disabled={status === 'loading'}
                      />
                      <span>{product.label}</span>
                    </label>
                  ))}
                </div>

                {status === 'error' && (
                  <p className="notify-error">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  className="notify-submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Subscribing...' : 'Notify Me'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
