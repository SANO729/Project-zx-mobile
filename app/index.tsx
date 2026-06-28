import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Colors, Radius } from '../constants/theme';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const router = useRouter();
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.08,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Background glow orbs */}
      <View style={[styles.orb, styles.orbTop]} />
      <View style={[styles.orb, styles.orbBottom]} />

      {/* Particle dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.particle,
            {
              left: Math.random() * width,
              top: Math.random() * height * 0.7,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              opacity: Math.random() * 0.5 + 0.1,
            },
          ]}
        />
      ))}

      <Animated.View
        style={[
          styles.content,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        {/* Logo hexagon */}
        <Animated.View style={[styles.logoContainer, { transform: [{ scale: pulseAnim }] }]}>
          <LinearGradient
            colors={['#1a1a3e', '#0d0d2b']}
            style={styles.hexOuter}
          >
            <View style={styles.hexInner}>
              <LinearGradient
                colors={['#7c4dff', '#3b82f6']}
                style={styles.hexGlow}
              />
              <View style={styles.hexContent}>
                <Text style={styles.logoText}>ZX</Text>
              </View>
            </View>
          </LinearGradient>

          {/* Glow rings */}
          <View style={styles.ring1} />
          <View style={styles.ring2} />
        </Animated.View>

        {/* Title */}
        <Text style={styles.title}>ZX AI Studio</Text>
        <Text style={styles.subtitle}>
          Crie Apps, Jogos e APKs com{'\n'}Inteligência Artificial
        </Text>
      </Animated.View>

      {/* Buttons */}
      <Animated.View style={[styles.buttons, { opacity: fadeAnim }]}>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => router.push('/login')}
          activeOpacity={0.85}
        >
          <LinearGradient
            colors={['#7c4dff', '#3b82f6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.btnGradient}
          >
            <Text style={styles.btnPrimaryText}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSecondary}
          onPress={() => router.push('/register')}
          activeOpacity={0.85}
        >
          <Text style={styles.btnSecondaryText}>Criar Conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  orb: {
    position: 'absolute',
    borderRadius: 999,
  },
  orbTop: {
    width: 300,
    height: 300,
    top: -80,
    left: width / 2 - 150,
    backgroundColor: '#3b82f620',
  },
  orbBottom: {
    width: 250,
    height: 250,
    bottom: 100,
    right: -60,
    backgroundColor: '#7c4dff18',
  },
  particle: {
    position: 'absolute',
    borderRadius: 99,
    backgroundColor: '#60a5fa',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 60,
  },
  logoContainer: {
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 36,
    position: 'relative',
  },
  hexOuter: {
    width: 150,
    height: 150,
    borderRadius: Radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#3b82f640',
    transform: [{ rotate: '0deg' }],
  },
  hexInner: {
    width: 130,
    height: 130,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#050510',
  },
  hexGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    opacity: 0.9,
  },
  hexContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 52,
    fontWeight: '900',
    color: Colors.white,
    letterSpacing: -2,
    textShadowColor: '#7c4dff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  ring1: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: '#3b82f630',
  },
  ring2: {
    position: 'absolute',
    width: 190,
    height: 190,
    borderRadius: Radius.xl + 8,
    borderWidth: 1,
    borderColor: '#7c4dff20',
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: Colors.white,
    letterSpacing: -0.5,
    marginBottom: 12,
    textShadowColor: '#7c4dff40',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttons: {
    width: '100%',
    paddingHorizontal: 32,
    paddingBottom: Platform.OS === 'ios' ? 48 : 40,
    gap: 14,
  },
  btnPrimary: {
    borderRadius: Radius.full,
    overflow: 'hidden',
    ...Colors,
  },
  btnGradient: {
    paddingVertical: 17,
    alignItems: 'center',
    borderRadius: Radius.full,
  },
  btnPrimaryText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  btnSecondary: {
    borderWidth: 1.5,
    borderColor: '#ffffff40',
    borderRadius: Radius.full,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#ffffff08',
  },
  btnSecondaryText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
