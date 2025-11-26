import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import './Unsubscribe.css';

export const Unsubscribe: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'not-found'>('loading');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setStatus('error');
      return;
    }

    const unsubscribe = async () => {
      try {
        // Find user by verification token
        const { data: user, error: userError } = await supabase
          .from('users')
          .select('id, email')
          .eq('verification_token', token)
          .single();

        if (userError || !user) {
          setStatus('not-found');
          return;
        }

        setEmail(user.email);

        // Delete all subscriptions
        const { error: deleteError } = await supabase
          .from('subscriptions')
          .delete()
          .eq('user_id', user.id);

        if (deleteError) throw deleteError;

        setStatus('success');
      } catch (err) {
        console.error('Unsubscribe error:', err);
        setStatus('error');
      }
    };

    unsubscribe();
  }, [searchParams]);

  return (
    <div className="unsubscribe-container">
      <div className="unsubscribe-card">
        {status === 'loading' && (
          <>
            <div className="unsubscribe-icon loading">...</div>
            <h1>Processing...</h1>
            <p>Please wait while we process your request.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="unsubscribe-icon success">&#10003;</div>
            <h1>Unsubscribed</h1>
            <p>
              <strong>{email}</strong> has been removed from all mailing lists.
            </p>
            <a href="/" className="unsubscribe-home">Back to Home</a>
          </>
        )}

        {status === 'not-found' && (
          <>
            <div className="unsubscribe-icon error">?</div>
            <h1>Link Invalid</h1>
            <p>This unsubscribe link is invalid or has already been used.</p>
            <a href="/" className="unsubscribe-home">Back to Home</a>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="unsubscribe-icon error">!</div>
            <h1>Something Went Wrong</h1>
            <p>We couldn't process your request. Please try again later.</p>
            <a href="/" className="unsubscribe-home">Back to Home</a>
          </>
        )}
      </div>
    </div>
  );
};
