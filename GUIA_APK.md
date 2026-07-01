# 📱 Guia Completo: Como Criar um APK com Expo

## 🎯 Objetivo
Transformar seu projeto **ZX AI Studio** em um arquivo APK executável para Android.

---

## 📋 Pré-requisitos

### 1. **Conta Expo**
- Criar em: [expo.dev](https://expo.dev)
- É gratuita e necessária para builds

### 2. **Node.js e npm**
```bash
node --version  # Versão 18+ recomendada
npm --version
```

### 3. **Expo CLI instalado globalmente**
```bash
npm install -g eas-cli
```

### 4. **Android Studio (Opcional, apenas para testes locais)**
- Download: [developer.android.com](https://developer.android.com/studio)

---

## 🚀 3 Métodos para Criar APK

### **MÉTODO 1: Cloud Build (Recomendado - Mais Fácil)**

#### Passo 1: Fazer Login no Expo
```bash
eas login
# Digite suas credenciais do Expo
```

#### Passo 2: Configurar o Projeto
```bash
eas build:configure
# Selecione a plataforma Android
```

#### Passo 3: Iniciar a Build
```bash
eas build --platform android
```

**Vantagens:**
✅ Não precisa de Android Studio  
✅ Build na nuvem (compilação automática)  
✅ Funciona em Windows, Mac e Linux  
✅ Mais confiável

**Tempo:** 10-15 minutos

---

### **MÉTODO 2: Local Build (Mais Rápido)**

Se você quiser compilar localmente:

```bash
eas build --platform android --local
```

**Pré-requisitos:**
- Java Development Kit (JDK) 17
- Android SDK

---

### **MÉTODO 3: Expo Export + Compilação Manual**

Para controle total:

```bash
expo export --platform android
```

Depois compilar com gradle:
```bash
cd android
./gradlew assembleRelease
```

---

## 📝 Checklist Antes de Fazer a Build

- [ ] `app.json` está correto
- [ ] `package.json` tem todas as dependências
- [ ] `expo-env.d.ts` gerado
- [ ] Sem erros no TypeScript: `npm run typecheck`
- [ ] Sem warnings: `npm run lint`
- [ ] Sua conta Expo está logada: `eas whoami`

---

## ⚙️ Configuração do `app.json`

Sua configuração atual está boa, mas você pode melhorar:

```json
{
  "expo": {
    "name": "ZX AI Studio",
    "slug": "zx-ai-studio",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "zxaistudio",
    "userInterfaceStyle": "dark",
    "newArchEnabled": true,
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#09090f"
      },
      "permissions": ["INTERNET", "CAMERA"]
    },
    "plugins": ["expo-router", "expo-font", "expo-web-browser"],
    "experiments": {
      "typedRoutes": true
    }
  }
}
```

---

## 🎨 Assets Necessários

Crie as imagens em `assets/images/`:

- **icon.png** (1024x1024) - Ícone do app
- **adaptive-icon.png** (1024x1024) - Ícone adaptativo Android
- **splash.png** (1242x2436) - Tela de splash

**Dica:** Use [Expo Image Generator](https://www.figma.com/community/file/920939699812220218/Expo-Image-Template)

---

## 📥 Onde o APK Fica?

### Cloud Build:
```
Link enviado por email + disponível no dashboard Expo
```

### Local Build:
```
android/app/build/outputs/apk/release/app-release.apk
```

---

## 🔍 Verificar Status da Build

```bash
# Ver builds em andamento
eas build:list

# Ver status de uma build específica
eas build:view <BUILD_ID>
```

---

## 📱 Testar o APK

### No Emulador Android
```bash
eas build --platform android
# Após terminar, pode instalar direto do link
```

### No Dispositivo Físico
1. Baixar o APK do link enviado
2. Transferir para o Android
3. Abrir em um gerenciador de arquivos
4. Clicar em "Instalar"

---

## ❌ Possíveis Erros e Soluções

### Erro: "Credenciais inválidas"
```bash
eas logout
eas login
```

### Erro: "Node modules faltando"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro: "TypeScript compilation failed"
```bash
npm run typecheck
# Corrigir erros apontados
```

### Build travada há muito tempo
```bash
# Cancelar
eas build:cancel <BUILD_ID>

# Tentar novamente
eas build --platform android
```

---

## 🔐 Variáveis de Ambiente

Se você usar Supabase (vejo no seu `package.json`):

Crie um arquivo `.env`:
```
EXPO_PUBLIC_SUPABASE_URL=sua_url
EXPO_PUBLIC_SUPABASE_KEY=sua_chave
```

E referencie no código:
```typescript
import { EXPO_PUBLIC_SUPABASE_URL } from '@env';
```

---

## 🚢 Publicar na Play Store

Após ter o APK funcionando:

1. Criar conta Google Play Developer ($25 uma vez)
2. Upload do APK para a Play Store
3. Preencher metadados (descrição, screenshots, etc)
4. Aguardar revisão (24-48h)

---

## 📊 Seu Projeto - Resumo

| Item | Status |
|------|--------|
| Expo Router | ✅ Configurado |
| React Native | ✅ 0.81.4 |
| TypeScript | ✅ Ativo |
| Theme | ✅ Customizado |
| Telas | ✅ Splash, Login, Register, Tabs |

---

## 💡 Próximos Passos

1. **Execute o comando:**
   ```bash
   eas login
   eas build:configure
   eas build --platform android
   ```

2. **Aguarde a compilação** (10-15 min)

3. **Receba um link** para baixar o APK

4. **Teste em um dispositivo Android**

---

## 📞 Suporte

- Documentação: [docs.expo.dev](https://docs.expo.dev)
- CLI Help: `eas build --help`
- Issues: [github.com/expo/eas-cli](https://github.com/expo/eas-cli)

---

**Boa sorte com seu APK! 🚀**
