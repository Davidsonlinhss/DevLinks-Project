function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  // se tiver a light mode, adicionar a imagem light

   if (html.classList.contains('light')) {
     // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/avatar2.png")
    img.setAttribute("alt", "Foto do meu filhote Zig próximo a janela de perfil.")
   } else {
    img.setAttribute("src", "assets/Avatar.png")
    img.setAttribute("alt", "Foto de Davidson Linhares em escritório, usando óculos com camisa de gola.")

   }
}

