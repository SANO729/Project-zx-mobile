import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Animated,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Eye, EyeOff } from 'lucide-react-native';
import { Colors, Radius } from '../constants/theme';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: Colors.bg }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Background orbs */}
        <View style={styles.orb1} />
        <View style={styles.orb2} />

        {/* Logo */}
        <View style={styles.logoArea}>
          <View style={styles.logoBox}>
            <Text style={styles.logoZX}>ZX</Text>
          </View>
          <Text style={styles.logoLabel}>AI STUDIO</Text>
        </View>

        {/* Heading */}
        <Text style={styles.heading}>Bem-vindo de volta</Text>
        <Text style={styles.subheading}>Faça login para continuar criando</Text>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor={Colors.textMuted}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              selectionColor={Colors.primary}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, { flex: 1, borderWidth: 0 }]}
                placeholder="Digite sua senha"
                placeholderTextColor={Colors.textMuted}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPass}
                selectionColor={Colors.primary}
              />
              <TouchableOpacity
                onPress={() => setShowPass(!showPass)}
                style={styles.eyeBtn}
              >
                {showPass ? (
                  <EyeOff size={20} color={Colors.textSecondary} />
                ) : (
                  <Eye size={20} color={Colors.textSecondary} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.forgotBtn}>
            <Text style={styles.forgotText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        {/* Login button */}
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => router.replace('/(tabs)')}
          activeOpacity={0.85}
        >
          <LinearGradient
            colors={['#7c4dff', '#3b82f6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.loginGradient}
          >
            <Text style={styles.loginText}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>ou continue com</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social buttons */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={[styles.socialBtn, styles.googleBtn]}>
            <Text style={styles.googleG}>G</Text>
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialBtn, styles.githubBtn]}>
            <Text style={styles.githubIcon}>⬤</Text>
            <Text style={styles.githubText}>GitHub</Text>
          </TouchableOpacity>
        </View>

        {/* Register link */}
        <View style={styles.registerRow}>
          <Text style={styles.registerText}>Não tem conta? </Text>
          <TouchableOpacity onPress={() => router.push('/register')}>
            <Text style={styles.registerLink}>Criar agora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: Platform.OS === 'ios' ? 70 : 50,
    paddingBottom: 40,
  },
  orb1: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 999,
    backgroundColor: '#7c4dff15',
    top: -60,
    right: -80,
  },
  orb2: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 999,
    backgroundColor: '#3b82f610',
    bottom: 100,
    left: -60,
  },
  logoArea: {
    alignItems: 'center',
    marginBottom: 28,
  },
  logoBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#1a1a3e',
    borderWidth: 1.5,
    borderColor: '#7c4dff60',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  logoZX: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.white,
    letterSpacing: -1,
  },
  logoLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.primary,
    letterSpacing: 3,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 36,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    gap: 16,
    marginBottom: 8,
  },
  inputGroup: {
    width: '100%',
  },
  label: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 8,
    fontWeight: '600',
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#0f0f1e',
    borderWidth: 1.5,
    borderColor: '#7c4dff50',
    borderRadius: Radius.md,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: Colors.white,
    fontSize: 15,
    width: '100%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0f0f1e',
    borderWidth: 1.5,
    borderColor: '#7c4dff50',
    borderRadius: Radius.md,
    paddingHorizontal: 16,
  },
  eyeBtn: {
    padding: 4,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  forgotText: {
    color: Colors.accentGlow,
    fontSize: 13,
    fontWeight: '600',
  },
  loginBtn: {
    width: '100%',
    borderRadius: Radius.md,
    overflow: 'hidden',
    marginTop: 24,
    marginBottom: 24,
  },
  loginGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  loginText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: '700',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ffffff15',
  },
  dividerText: {
    color: Colors.textMuted,
    fontSize: 13,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
    marginBottom: 28,
  },
  socialBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    borderRadius: Radius.md,
    gap: 8,
  },
  googleBtn: {
    backgroundColor: '#ffffff',
  },
  googleG: {
    fontSize: 16,
    fontWeight: '800',
    color: '#4285F4',
  },
  googleText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  githubBtn: {
    backgroundColor: '#1a1a2e',
    borderWidth: 1,
    borderColor: '#ffffff20',
  },
  githubIcon: {
    fontSize: 12,
    color: Colors.white,
  },
  githubText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
  },
  registerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  registerLink: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
});
