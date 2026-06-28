import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react-native';
import { Colors, Radius } from '../constants/theme';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
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
        <View style={styles.orb1} />

        {/* Back button */}
        <TouchableOpacity style={styles.back} onPress={() => router.back()}>
          <ArrowLeft size={22} color={Colors.white} />
        </TouchableOpacity>

        <View style={styles.logoArea}>
          <View style={styles.logoBox}>
            <Text style={styles.logoZX}>ZX</Text>
          </View>
          <Text style={styles.logoLabel}>AI STUDIO</Text>
        </View>

        <Text style={styles.heading}>Criar sua conta</Text>
        <Text style={styles.subheading}>Comece a criar gratuitamente</Text>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor={Colors.textMuted}
              value={name}
              onChangeText={setName}
              selectionColor={Colors.primary}
            />
          </View>
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
                placeholder="Crie uma senha"
                placeholderTextColor={Colors.textMuted}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPass}
                selectionColor={Colors.primary}
              />
              <TouchableOpacity onPress={() => setShowPass(!showPass)} style={styles.eyeBtn}>
                {showPass ? (
                  <EyeOff size={20} color={Colors.textSecondary} />
                ) : (
                  <Eye size={20} color={Colors.textSecondary} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => router.replace('/(tabs)')}
          activeOpacity={0.85}
        >
          <LinearGradient
            colors={['#7c4dff', '#3b82f6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.btnGradient}
          >
            <Text style={styles.btnText}>Criar Conta Grátis</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Já tem conta? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.loginLink}>Entrar</Text>
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
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 40,
  },
  orb1: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 999,
    backgroundColor: '#7c4dff12',
    top: -80,
    left: -60,
  },
  back: {
    alignSelf: 'flex-start',
    padding: 8,
    marginBottom: 20,
    backgroundColor: '#ffffff10',
    borderRadius: 12,
  },
  logoArea: {
    alignItems: 'center',
    marginBottom: 24,
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
    marginBottom: 32,
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
  eyeBtn: { padding: 4 },
  btn: {
    width: '100%',
    borderRadius: Radius.md,
    overflow: 'hidden',
    marginTop: 28,
    marginBottom: 24,
  },
  btnGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  btnText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: '700',
  },
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    color: Colors.textSecondary,
    fontSize: 14,
  },
  loginLink: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
});
