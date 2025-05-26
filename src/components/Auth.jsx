import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Kayıt
  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) setMessage(`Kayıt hatası: ${error.message}`);
    else setMessage('Kayıt başarılı! Lütfen e-postanı kontrol et.');
  };

  // Giriş
  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setMessage(`Giriş hatası: ${error.message}`);
    else setMessage('Giriş başarılı!');
  };

  return (
    <div style={{ maxWidth: 320, margin: 'auto', padding: 20 }}>
      <h2>Kayıt & Giriş</h2>
      <input
        type="email"
        placeholder="E-posta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <button onClick={handleSignUp} style={{ marginRight: 8 }}>
        Kayıt Ol
      </button>
      <button onClick={handleSignIn}>Giriş Yap</button>
      <p>{message}</p>
    </div>
  );
}
