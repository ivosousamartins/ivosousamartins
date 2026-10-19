#!/bin/bash
# Double-click to deploy helloivo.pt: builds a preview first, then asks before going live.
cd "$(dirname "$0")" || exit 1
echo "A criar preview..."
npx vercel || { echo "Falhou o preview."; read -n 1 -s -r -p "Prima uma tecla para fechar"; exit 1; }
echo
read -p "Preview OK? Publicar em producao (helloivo.pt)? [s/N] " r
if [[ "$r" == "s" || "$r" == "S" ]]; then
  npx vercel --prod
else
  echo "Nao publicado."
fi
read -n 1 -s -r -p "Prima uma tecla para fechar"
