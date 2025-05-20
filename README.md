# 🌐 Three.js Scene – Transformações e Câmera

Projeto educacional com foco na biblioteca [Three.js](https://threejs.org/), utilizando transformações 3D, geometria básica, controle de câmera e estrutura modular com clean code.

---

## 🎯 Objetivo

* Criar uma cena 3D com objetos variados
* Aplicar transformações (posição, rotação, escala)
* Configurar câmera e controles de órbita
* Usar `MeshBasicMaterial` para materiais sem iluminação
* Separar responsabilidades em arquivos distintos

---

## 🛠️ Tecnologias

* [Three.js](https://threejs.org/)
* [Vite](https://vitejs.dev/) para ambiente local rápido
* JavaScript ES Modules

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/ErnestoTSantos/Three.js

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Abra no navegador: [http://localhost:5173](http://localhost:5173)

---

## 🧠 Conceitos Aplicados

* **Geometrias 3D**: `BoxGeometry`, `SphereGeometry`, `ConeGeometry`
* **Transformações**: `.position`, `.rotation`, `.scale`
* **Câmera**: `PerspectiveCamera` com ajuste de FOV
* **Renderização**: `WebGLRenderer` configurado com responsividade
* **Controles**: `OrbitControls` para interação do usuário
