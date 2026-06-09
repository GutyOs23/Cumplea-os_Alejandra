// ========== UNIVERSO DE ALEJANDRA - EDICIÓN ESPECIAL CUMPLEAÑOS ==========
// CON 500 FRASES REALES Y SNOOPY ANIMADO

document.addEventListener('DOMContentLoaded', () => {
  
  console.log('🌟🎂 ¡FELIZ CUMPLEAÑOS ALEJANDRA! 🎂🌟');
  
  // ========== TYPEWRITER ==========
  const typewriterEl = document.getElementById('typewriterText');
  const textSequence = [
    "🎂✨ Hoy no es un día cualquiera... ✨🎂",
    "✨ Hoy el universo se vistió de gala...",
    "🌙 Las estrellas brillan más que nunca...",
    "💖 Porque es el cumpleaños de una persona muy especial...",
    "🎉 ¡FELIZ CUMPLEAÑOS, ALEJANDRA! 🎉"
  ];
  let textIdx = 0;
  let charIdx = 0;
  let isTyping = true;
  
  if (typewriterEl) {
    typewriterEl.innerHTML = '';
  }
  
  function typeNext() {
    if (!isTyping) return;
    
    if (textIdx < textSequence.length) {
      if (charIdx < textSequence[textIdx].length) {
        typewriterEl.innerHTML += textSequence[textIdx][charIdx];
        charIdx++;
        setTimeout(typeNext, 50);
      } else {
        textIdx++;
        charIdx = 0;
        if (textIdx < textSequence.length) {
          typewriterEl.innerHTML += "<br>";
          setTimeout(typeNext, 400);
        } else {
          isTyping = false;
          const enterBtn = document.getElementById('enterUniverseBtn');
          if (enterBtn) {
            enterBtn.classList.remove('hidden');
          }
        }
      }
    }
  }
  
  if (typewriterEl) typeNext();
  
  // ========== AUDIO ==========
  const backgroundMusic = new Audio();
  backgroundMusic.src = 'look-after-you.mp3';
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.5;
  backgroundMusic.preload = 'auto';
  
  let musicPlaying = false;
  let musicAnimationId = null;
  let musicProgressInterval = null;
  let currentProgress = 0;
  
  // ========== BOTÓN ENTRAR ==========
  const enterBtn = document.getElementById('enterUniverseBtn');
  
  if (enterBtn) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      backgroundMusic.play().catch(() => showFloatingMessage('🎵 Haz clic en el botón de música'));
      musicPlaying = true;
      const playBtn = document.getElementById('playPauseMusicBtn');
      if (playBtn) playBtn.innerHTML = '<i class="fas fa-pause"></i>';
      startMusicVisualizer();
      startProgressBar();
      
      const loading = document.getElementById('loadingScreen');
      if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => {
          loading.classList.add('hidden');
          const mainApp = document.getElementById('mainApp');
          if (mainApp) mainApp.classList.remove('hidden');
          initAll();
          setTimeout(() => showBirthdaySurprise(), 2000);
        }, 800);
      }
    });
  }
  
  // ========== VISUALIZADOR ==========
  function startMusicVisualizer() {
    const vizBars = document.querySelectorAll('#visualizer span');
    if (!vizBars.length) return;
    function animate() {
      if (!musicPlaying) return;
      vizBars.forEach(bar => bar.style.height = Math.random() * 24 + 4 + 'px');
      musicAnimationId = requestAnimationFrame(animate);
    }
    animate();
  }
  
  function stopMusicVisualizer() {
    if (musicAnimationId) cancelAnimationFrame(musicAnimationId);
    document.querySelectorAll('#visualizer span').forEach(bar => bar.style.height = '4px');
  }
  
  function startProgressBar() {
    const progressBar = document.getElementById('playerProgress');
    if (!progressBar) return;
    if (musicProgressInterval) clearInterval(musicProgressInterval);
    currentProgress = 0;
    musicProgressInterval = setInterval(() => {
      if (musicPlaying) {
        currentProgress = (currentProgress + 0.5) % 100;
        progressBar.style.width = currentProgress + '%';
      }
    }, 500);
  }
  
  // ========== INICIALIZAR ==========
  function initAll() {
    initCounter();
    generateReasons();
    createFlowerGarden();
    createEnvelopes();
    initBook();
    initPlanets();
    initMinigames();
    initFinalSky();
    startSurpriseMessages();
    initMusicControls();
    initParticles();
    initEasterEggs();
    initBirthdayButton();
    initSnoopyCanvas();
  }
  
  // ========== CONTROLES MÚSICA ==========
  function initMusicControls() {
    const playBtn = document.getElementById('playPauseMusicBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (musicPlaying) {
          backgroundMusic.pause();
          musicPlaying = false;
          playBtn.innerHTML = '<i class="fas fa-play"></i>';
          stopMusicVisualizer();
        } else {
          backgroundMusic.play().then(() => {
            musicPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            startMusicVisualizer();
          }).catch(() => showFloatingMessage('🎵 Haz clic para activar la música'));
        }
      });
    }
    if (volumeSlider) {
      volumeSlider.addEventListener('input', (e) => backgroundMusic.volume = parseFloat(e.target.value));
    }
  }
  
  // ========== CONTADOR ==========
  function initCounter() {
    const start = new Date(2025, 10, 1);
    const now = new Date();
    const days = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    const safeDays = days > 0 ? days : 30;
    
    animateNumber('daysCount', safeDays);
    animateNumber('nightsCount', safeDays);
    animateNumber('sunsCount', safeDays);
    animateNumber('chaptersCount', Math.floor(safeDays / 3) + 15);
    
    const timelineDiv = document.getElementById('timelineEvents');
    if (timelineDiv) {
      timelineDiv.innerHTML = [
        "❤️ El día que el universo nos unió",
        "🌙 Noches llenas de estrellas y conversaciones",
        "✨ Cada día a tu lado es un regalo",
        "🎈 Hoy celebramos TU día especial",
        "🌟 Eres la persona más maravillosa"
      ].map(m => `<div class="timeline-msg">${m}</div>`).join('');
    }
  }
  
  function animateNumber(id, value) {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.ceil(value / 50);
      const el = document.getElementById(id);
      if (el) el.innerText = current >= value ? value : current;
      if (current >= value) clearInterval(interval);
    }, 30);
  }
  
  // ========== 500 RAZONES - CON 100 FRASES ÚNICAS QUE SE REPITEN PARA LLEGAR A 500 ==========
  const frasesRazones = [
    // 💖 RAZONES DE AMOR Y ADMIRACIÓN (1-20)
    "Por tu sonrisa que ilumina los días más grises",
    "Por tu forma de ver magia en las pequeñas cosas",
    "Por tu fuerza silenciosa cuando todo parece difícil",
    "Por tu corazón enorme que cabe todo el universo",
    "Por hacer del mundo un lugar más bonito solo con existir",
    "Por tu ternura que ablanda hasta las estrellas",
    "Por tu risa contagiosa que alegra cualquier momento",
    "Por tu mirada que dice más que mil palabras",
    "Por tu abrazo que cura cualquier tristeza",
    "Por tu paciencia infinita con los demás",
    "Por tu forma única de ser, sin comparación",
    "Por tu lealtad y honestidad inquebrantables",
    "Por tu creatividad que inspira a todos",
    "Por tu inteligencia que admiro cada día",
    "Por tu sensibilidad que te hace especial",
    "Por tu valentía para enfrentar los miedos",
    "Por tu generosidad sin esperar nada a cambio",
    "Por tu humildad a pesar de lo increíble que eres",
    "Por tu capacidad de hacer sentir bien a los demás",
    "Por tu energía positiva que todo lo transforma",
    
    // 🌸 CUALIDADES ÚNICAS (21-40)
    "Por tu dulzura que suaviza cualquier tormenta",
    "Por tu alegría que contagia al universo entero",
    "Por tu calma que es un remanso de paz",
    "Por tus sueños que vuelan alto como mariposas",
    "Por tu bondad que florece en jardines eternos",
    "Por tu autenticidad, porque eres real",
    "Por tu espontaneidad que me encanta",
    "Por tu forma de escuchar cuando alguien te necesita",
    "Por tu manera de dar consejos sin juzgar",
    "Por tu capacidad de ver lo bueno en los demás",
    "Por tu forma de amar sin condiciones",
    "Por tu resiliencia, te caes y te levantas",
    "Por tu perseverancia para lograr lo que quieres",
    "Por tu pasión por lo que te gusta",
    "Por tu estilo único, nadie como tú",
    "Por tu forma de vestir que refleja tu esencia",
    "Por tu sentido del humor, me haces reír",
    "Por tu forma de bailar, libre y auténtica",
    "Por tu voz, mi canción favorita",
    "Por tu presencia, que todo lo mejora",
    
    // 🌙 MOMENTOS Y RECUERDOS (41-60)
    "Por todas las veces que me hiciste sonreír sin saberlo",
    "Por esos mensajes que alegran mi día",
    "Por las conversaciones hasta tarde",
    "Por esos silencios cómplices que todo lo dicen",
    "Por los planes que haremos juntos",
    "Por los recuerdos que ya construimos",
    "Por los momentos que están por venir",
    "Por cada 'buenos días' especial",
    "Por cada 'buenas noches' deseando soñar contigo",
    "Por las risas compartidas que atesoro",
    "Por las canciones que me recuerdan a ti",
    "Por las películas que quiero ver contigo",
    "Por los lugares que quiero descubrir a tu lado",
    "Por las fotos que capturan tu esencia",
    "Por tus estados que siempre me sacan una sonrisa",
    "Por tus historias que me tienen enganchado",
    "Por tu forma de contar las cosas",
    "Por tus ocurrencias únicas",
    "Por tus gestos que demuestran quién eres",
    "Por esos detalles tuyos que nunca pasan desapercibidos",
    
    // ⭐ COSAS QUE TE HACEN ESPECIAL (61-80)
    "Porque eres una estrella fugaz en mi vida",
    "Porque llegaste sin avisar y lo cambiaste todo",
    "Porque eres de esas personas que dejan huella",
    "Porque contigo el tiempo vuela",
    "Porque a tu lado todo es más fácil",
    "Porque me haces querer ser mejor persona",
    "Porque me inspiras a seguir adelante",
    "Porque me enseñas qué es la bondad",
    "Porque me demuestras que existe gente buena",
    "Porque me haces creer en el destino",
    "Porque eres mi persona favorita del mundo",
    "Porque sin ti el universo sería menos brillante",
    "Porque contigo aprendí qué es la gratitud",
    "Porque me haces sentir afortunado cada día",
    "Porque eres mi lugar seguro",
    "Porque eres mi calma en la tormenta",
    "Porque eres mi refugio favorito",
    "Porque eres mi canción favorita",
    "Porque eres mi película preferida",
    "Porque eres el mejor capítulo de mi vida",
    
    // 🌸 MÁS ADMIRACIÓN (81-100)
    "Por cómo tratas a los que quieres",
    "Por cómo defiendes lo que crees",
    "Por cómo luchas por tus sueños",
    "Por cómo sonríes a pesar de todo",
    "Por cómo sigues adelante cuando duele",
    "Por cómo cuidas de los demás sin esperar nada",
    "Por cómo iluminas una habitación al entrar",
    "Por cómo haces sentir especial a quien te rodea",
    "Por cómo transformas lo negativo en positivo",
    "Por cómo ves la belleza donde otros no",
    "Por cómo abrazas la vida con pasión",
    "Por cómo enfrentas los retos con valentía",
    "Por cómo ríes de corazón",
    "Por cómo lloras sin vergüenza",
    "Por cómo vives cada momento intensamente",
    "Por cómo amas sin medida",
    "Por cómo sueñas sin límites",
    "Por cómo brillas sin esfuerzo",
    "Por cómo vuelas sin alas",
    "Por cómo eres, simple y maravillosamente TÚ"
  ];
  
  // Generar 500 razones (repetimos las 100 frases 5 veces cada una)
  const razones = [];
  for (let i = 0; i < 500; i++) {
    const frase = frasesRazones[i % frasesRazones.length];
    const numero = i + 1;
    razones.push(`✨ Razón #${numero}: ${frase} ✨`);
  }
  
  let razonesDescubiertas = 0;
  
  function generateReasons() {
    const container = document.getElementById('reasonsContainer');
    if (!container) return;
    const icons = ['⭐', '🌟', '💫', '✨', '💖', '🌠', '🌟', '⭐'];
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'reason-star';
      star.innerHTML = icons[i % icons.length];
      star.addEventListener('click', () => {
        const random = razones[Math.floor(Math.random() * razones.length)];
        const reasonDisplay = document.getElementById('currentReason');
        if (reasonDisplay) {
          reasonDisplay.innerHTML = random;
          reasonDisplay.style.animation = 'none';
          setTimeout(() => reasonDisplay.style.animation = 'fadeInUp 0.3s ease', 10);
        }
        razonesDescubiertas++;
        const counter = document.getElementById('reasonCounter');
        if (counter) counter.innerText = `${Math.min(razonesDescubiertas, 500)} / 500 razones descubiertas`;
        showFloatingMessage('💖 Una nueva razón para admirarte 💖');
        
        // Efecto de brillo
        star.style.transform = 'scale(1.5)';
        setTimeout(() => star.style.transform = '', 200);
      });
      container.appendChild(star);
    }
    
    const counter = document.getElementById('reasonCounter');
    if (counter) counter.innerText = `0 / 500 razones descubiertas`;
  }
  
  // ========== JARDÍN SECRETO ==========
  const mensajesFlor = [
    "🌸 Eres como una flor que florece incluso en invierno",
    "🌷 Tu esencia perfuma todo a tu alrededor",
    "🌼 Cada día contigo es primavera en el corazón",
    "🌻 Giras hacia la luz y nos iluminas a todos",
    "🌺 Tu belleza es tan única como una flor rara",
    "💐 Eres el ramo más hermoso que la vida me ha dado",
    "🌹 Cada pétalo de tu ser es perfecto",
    "🌸 Tu presencia alegra el jardín de mi vida",
    "🌷 Floreces donde otros solo ven piedras",
    "🌼 Tu dulzura ablanda hasta los corazones más duros",
    "🌻 Eres girasol en un campo de margaritas",
    "🌺 Exótica, única, especial... así eres tú"
  ];
  
  function createFlowerGarden() {
    const garden = document.getElementById('flowerGarden');
    if (!garden) return;
    const flores = ['🌷', '🌸', '🌼', '🌻', '🌺', '💐', '🌹'];
    for (let i = 0; i < 70; i++) {
      const flower = document.createElement('div');
      flower.className = 'flower';
      flower.innerHTML = flores[i % flores.length];
      flower.addEventListener('click', () => {
        const msg = mensajesFlor[Math.floor(Math.random() * mensajesFlor.length)];
        showFloatingMessage(msg);
        flower.style.transform = 'scale(1.3) rotate(10deg)';
        setTimeout(() => flower.style.transform = '', 300);
      });
      garden.appendChild(flower);
    }
  }
  
  // ========== CARTAS ==========
  function createEnvelopes() {
    const container = document.getElementById('envelopesContainer');
    if (!container) return;
    
    const cartas = [
      { title: "🎂 Para ti en tu día especial", body: "Querida Alejandra,\n\nHoy el universo entero se viste de fiesta porque es tu cumpleaños. No sé cómo agradecer al destino por cruzarnos en el camino. Eres de esas personas que llegan y todo cambia, todo mejora, todo brilla más.\n\nGracias por ser luz, por ser calma, por ser esa sonrisa que alegra mis días. Espero que hoy recibas el doble de todo el amor que das, porque te lo mereces y mucho más.\n\n🎂 ¡FELIZ CUMPLEAÑOS! 🎂\n\nCon todo mi cariño, alguien que te admira profundamente." },
      { title: "💌 Lo que más valoro de ti", body: "Si tuviera que elegir qué es lo que más valoro de ti, sería imposible. Porque valoro tu risa, tu forma de ver la vida, tu manera de preocuparte por los demás incluso cuando tú no estás bien.\n\nValoro esos pequeños detalles que nadie más ve. Esa forma única de ser que te hace especial. No cambies nunca, porque eres perfecta tal como eres.\n\n💖 Gracias por ser TÚ." },
      { title: "✨ Un deseo para ti", body: "Hoy, en tu día, si pudiera pedir un deseo, no sería para mí. Sería para ti.\n\nDeseo que la vida te devuelva todo el amor que regalas. Deseo que tus sueños se hagan realidad, uno por uno. Deseo que cada amanecer te traiga una nueva razón para sonreír.\n\nY sobre todo, deseo que nunca olvides lo increíblemente valiosa que eres.\n\n🌟 Brillas más que todas las estrellas juntas." },
      { title: "🌙 Lo que aprendí contigo", body: "Antes de conocerte, no sabía que se podía sentir tanta gratitud por alguien. Aprendí que las personas especiales no se buscan, simplemente aparecen y lo cambian todo.\n\nAprendí que una sonrisa sincera puede iluminar el día más gris. Aprendí que los pequeños momentos son los que más quedan en el corazón.\n\nGracias por enseñarme tanto sin saberlo.\n\n🌙 Eres mi lugar favorito en el universo." },
      { title: "🎈 Snoopy y Woodstock te desean...", body: "🐶 Snoopy dice: ¡Woof! Eres mi humana favorita de todo el universo. Te he visto volar más alto que yo en mi caseta.\n\n🐦 Woodstock dice: ¡Pío! Alejandra, tú me enseñas a volar cada día. Eres la mejor.\n\nY juntos, desde su pequeño mundo, te desean el cumpleaños más feliz del mundo. Porque te lo mereces, ahora y siempre.\n\n🎂 ¡FELIZ DÍA! 🎂" },
      { title: "⭐ 500 Razones en una", body: "Podría pasarme horas y horas enumerando razones por las que eres especial. Tu sonrisa, tu forma de ser, tu corazón enorme... Pero al final, todo se resume en algo muy simple:\n\nERES TÚ. Simplemente, maravillosamente, extraordinariamente TÚ.\n\nY eso es más que suficiente. Eso es todo lo que el universo necesita.\n\n✨ Gracias por existir. ✨" }
    ];
    
    cartas.forEach(c => {
      const env = document.createElement('div');
      env.className = 'envelope';
      env.innerHTML = `${c.title}<br><span style="font-size:0.7rem;">📖 Abrir</span>`;
      env.addEventListener('click', () => {
        const letterText = document.getElementById('letterText');
        const letterModal = document.getElementById('letterModal');
        if (letterText) letterText.innerHTML = c.body.replace(/\n/g, '<br>');
        if (letterModal) letterModal.classList.remove('hidden');
      });
      container.appendChild(env);
    });
    
    document.getElementById('closeLetter')?.addEventListener('click', () => {
      document.getElementById('letterModal')?.classList.add('hidden');
    });
  }
  
  // ========== LIBRO INFINITO ==========
  const paginasLibro = [
    "📖✨ 'Eres la dueña de mi corazón y de todas mis estrellas' ✨📖",
    "🌙 'Cada noche, cuando miro al cielo, sé que en algún lugar estás brillando' 🌙",
    "⭐ 'Tu sonrisa es mi canción favorita, la que siempre quiero escuchar' ⭐",
    "💖 'Gracias por hacer del mundo un lugar más bonito solo por existir' 💖",
    "🌸 'Eres como una estrella fugaz: rara, hermosa y llena de magia' 🌸",
    "🎂 'Hoy es tu día y el universo entero lo sabe. ¡Felicidades!' 🎂",
    "🌟 'Nunca dejes de brillar, Alejandra. El universo te necesita' 🌟",
    "🦋 'Eres mariposa en un mundo de orugas: única, libre y hermosa' 🦋",
    "💫 'Tu luz es tan brillante que ilumina mi camino cada día' 💫",
    "🌺 'Eres como un amanecer: hermosa, llena de esperanza y única' 🌺"
  ];
  let paginaActual = 0;
  
  function initBook() {
    const pageDiv = document.getElementById('bookPageContent');
    if (!pageDiv) return;
    pageDiv.innerText = paginasLibro[0];
    
    document.getElementById('nextPageBtn')?.addEventListener('click', () => {
      paginaActual = (paginaActual + 1) % paginasLibro.length;
      pageDiv.innerText = paginasLibro[paginaActual];
      pageDiv.style.animation = 'fadeInUp 0.3s ease';
      setTimeout(() => pageDiv.style.animation = '', 300);
    });
    
    document.getElementById('prevPageBtn')?.addEventListener('click', () => {
      paginaActual = (paginaActual - 1 + paginasLibro.length) % paginasLibro.length;
      pageDiv.innerText = paginasLibro[paginaActual];
      pageDiv.style.animation = 'fadeInUp 0.3s ease';
      setTimeout(() => pageDiv.style.animation = '', 300);
    });
  }
  
  // ========== PLANETAS ==========
  const mensajesPlanetas = {
    dulzura: "🌻 Tu dulzura no es debilidad, es tu superpoder. Transformas tormentas en brisas y días grises en arcoíris. Esa ternura que te caracteriza es lo que hace que todos a tu alrededor se sientan en casa. Eres como una taza de chocolate caliente en un día frío. 🌻",
    sonrisa: "✨ Hay sonrisas que iluminan habitaciones, y luego está la tuya, que ilumina universos enteros. Cuando sonríes, las estrellas se ponen celosas porque saben que brillas más que ellas. Nunca dejes de sonreír, porque esa sonrisa es el regalo más bonito que alguien pueda recibir. ✨",
    calma: "🌙 Eres ese lugar seguro al que todos quieren llegar. Tu presencia es como una manta cálida en invierno, como el sonido de la lluvia en la ventana, como el mar en calma después de una tormenta. Gracias por ser ese remanso de paz en mi vida. 🌙",
    alegria: "⭐ Tu alegría es contagiosa, como un virus bueno que solo trae cosas bonitas. Cuando estás feliz, el mundo entero parece más colorido. Eres como una canción que siempre quiero escuchar, como el primer rayo de sol después de la lluvia. ⭐",
    suenos: "🦋 Tus sueños no son solo tuyos, inspiran a quienes te rodean. Vuelan alto, como mariposas libres. Nunca dejes de soñar, porque tus sueños tienen el poder de hacerse realidad. Cada uno de ellos es una estrella que guía tu camino. 🦋",
    bondad: "🌸 Tu bondad es silenciosa pero poderosa. No espera reconocimiento, solo florece donde pasa. Has sembrado amor en cada corazón que tocas, y ese amor vuelve a ti multiplicado. Eres como un jardín que regala sus flores sin pedir nada a cambio. 🌸"
  };
  
  function initPlanets() {
    const planets = document.querySelectorAll('.planet');
    const msgDiv = document.getElementById('planetMessage');
    if (!msgDiv) return;
    
    planets.forEach(p => {
      p.addEventListener('click', () => {
        const quality = p.dataset.quality;
        const msg = mensajesPlanetas[quality];
        msgDiv.innerHTML = `<div style="padding:20px; animation: fadeInUp 0.5s ease; font-size:1rem;">✨ ${msg} ✨</div>`;
        showFloatingMessage(`💫 Has descubierto el planeta de la ${p.innerText} 💫`);
      });
    });
  }
  
  // ========== MINIJUEGOS ==========
  function initMinigames() {
    const btns = document.querySelectorAll('.minigame-btn');
    const resultDiv = document.getElementById('minigameResult');
    const achievements = document.getElementById('achievementsList');
    
    const respuestas = {
      footprints: "🐾✨¡Seguiste las huellas mágicas! Te llevan directo a un mensaje secreto: 'Eres mi persona favorita en todo el universo, hoy y siempre. ¡Feliz cumpleaños! Snoopy dejó estas huellas especialmente para ti.'✨🐾",
      findWoodstock: "🐦💛 ¡Encontraste a Woodstock! Revolotea emocionado y te dice: '¡Pío pío! Alejandra, hoy es tu día. He volado por todo el mundo buscando la estrella más brillante para regalártela. Está en tu corazón, donde siempre ha estado.'💛🐦",
      hiddenStars: "⭐🌙 ¡Descubriste las estrellas ocultas! Forman una constelación que dice: 'Tu luz guía el camino de todos los que te aman. Brilla siempre, Alejandra. Eres la estrella más brillante de este universo.'🌙⭐",
      catchHearts: "❤️💖 ¡Atrapaste corazones flotantes! Cada uno tiene un mensaje: 'Eres mi razón para sonreír cada mañana', 'Gracias por existir y hacer mi vida mejor', 'Te mereces todo el amor y la felicidad del mundo', 'Hoy y siempre, eres especial'.💖❤️",
      birthdayWishes: "🎂🎁 ¡Hiciste realidad un deseo de cumpleaños! El universo ha escuchado y te envía: 'Que la vida te sonría tanto como tú sonríes al mundo. Que cada día sea tan especial como hoy. ¡Feliz cumpleaños, Alejandra!'🎁🎂"
    };
    
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const game = btn.dataset.game;
        if (resultDiv) {
          resultDiv.innerHTML = `<div style="animation: fadeInUp 0.3s ease; padding:15px;">✨ ${respuestas[game]} ✨</div>`;
          setTimeout(() => resultDiv.innerHTML = '', 6000);
        }
        
        if (achievements) {
          const badge = document.createElement('div');
          badge.innerHTML = `🏆 ¡Logro desbloqueado! ${btn.innerText}`;
          achievements.appendChild(badge);
          setTimeout(() => badge.remove(), 8000);
        }
        
        showFloatingMessage(`🎉 ¡MISIÓN COMPLETADA! ${btn.innerText} 🎉`);
      });
    });
  }
  
  // ========== SNOOPY ANIMADO EN CANVAS ==========
  function initSnoopyCanvas() {
    const canvas = document.getElementById('snoopyCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let snoopyX = 50;
    let snoopyY = 120;
    let woodstockX = 450;
    let woodstockY = 80;
    let frame = 0;
    let walkDirection = 1;
    let flyDirection = 1;
    
    function drawSnoopy() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Cielo y nubes
      ctx.fillStyle = '#2a4a6a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.beginPath();
      ctx.arc(100, 40, 30, 0, Math.PI * 2);
      ctx.arc(140, 30, 25, 0, Math.PI * 2);
      ctx.arc(60, 35, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(500, 50, 35, 0, Math.PI * 2);
      ctx.arc(540, 40, 28, 0, Math.PI * 2);
      ctx.arc(460, 45, 28, 0, Math.PI * 2);
      ctx.fill();
      
      // Casa de Snoopy
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(20, 130, 80, 60);
      ctx.fillStyle = '#A0522D';
      ctx.fillRect(50, 100, 20, 30);
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.moveTo(15, 130);
      ctx.lineTo(60, 95);
      ctx.lineTo(105, 130);
      ctx.fill();
      
      // Snoopy caminando
      const walkOffset = Math.sin(frame * 0.2) * 5;
      snoopyX += walkDirection * 1.5;
      if (snoopyX > 300) walkDirection = -1;
      if (snoopyX < 150) walkDirection = 1;
      
      ctx.fillStyle = 'white';
      ctx.shadowBlur = 5;
      ctx.shadowColor = 'rgba(0,0,0,0.3)';
      ctx.beginPath();
      ctx.ellipse(snoopyX, snoopyY, 25, 22, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(snoopyX - 10, snoopyY - 5, 3, 0, Math.PI * 2);
      ctx.arc(snoopyX + 10, snoopyY - 5, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(snoopyX, snoopyY + 5, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.fillRect(snoopyX - 18, snoopyY + 15, 8, 10);
      ctx.fillRect(snoopyX + 10, snoopyY + 15, 8, 10);
      
      // Orejas de Snoopy
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.ellipse(snoopyX - 20, snoopyY - 15, 8, 15, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(snoopyX + 20, snoopyY - 15, 8, 15, 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      // Woodstock volando
      woodstockY += flyDirection * 1.2;
      if (woodstockY > 100) flyDirection = -1;
      if (woodstockY < 50) flyDirection = 1;
      
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.ellipse(woodstockX, woodstockY, 12, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FFA500';
      ctx.beginPath();
      ctx.moveTo(woodstockX - 8, woodstockY - 5);
      ctx.lineTo(woodstockX - 15, woodstockY - 12);
      ctx.lineTo(woodstockX - 5, woodstockY - 8);
      ctx.fill();
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(woodstockX - 4, woodstockY - 2, 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Pastel de cumpleaños
      ctx.fillStyle = '#DEB887';
      ctx.fillRect(520, 140, 40, 30);
      ctx.fillStyle = '#FF69B4';
      ctx.fillRect(525, 135, 30, 10);
      for (let i = 0; i < 5; i++) {
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.moveTo(535 + i * 5, 135);
        ctx.lineTo(537 + i * 5, 120);
        ctx.lineTo(539 + i * 5, 135);
        ctx.fill();
      }
      
      ctx.shadowBlur = 0;
      frame++;
      requestAnimationFrame(drawSnoopy);
    }
    
    drawSnoopy();
    
    // Interacciones
    document.getElementById('petSnoopyBtn')?.addEventListener('click', () => {
      showFloatingMessage('🐶 Snoopy mueve la cola feliz. ¡Woof! Te quiere mucho 🐶');
      showFloatingMessage('💖 Snoopy te da un abrazo virtual por tu cumpleaños 💖');
    });
    
    document.getElementById('feedWoodstockBtn')?.addEventListener('click', () => {
      showFloatingMessage('🐦 Woodstock come feliz. ¡Pío pío! Gracias, Alejandra 🐦');
      showFloatingMessage('✨ Woodstock te regala una pluma mágica para que escribas tus sueños ✨');
    });
  }
  
  // ========== CIELO FINAL ==========
  function initFinalSky() {
    const canvas = document.getElementById('starCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = 250;
      drawStars();
    }
    
    let stars = [];
    let starAnimation = null;
    
    function drawStars() {
      stars = [];
      for (let i = 0; i < 200; i++) {
        stars.push({ 
          x: Math.random() * canvas.width, 
          y: Math.random() * canvas.height, 
          r: Math.random() * 2.5 + 1,
          alpha: Math.random() * 0.5 + 0.3,
          twinkle: Math.random() * 0.05 + 0.02
        });
      }
      drawStarsLoop();
    }
    
    function drawStarsLoop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.alpha += s.twinkle * (Math.random() - 0.5);
        s.alpha = Math.min(0.9, Math.max(0.2, s.alpha));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 230, 150, ${s.alpha})`;
        ctx.fill();
      });
      starAnimation = requestAnimationFrame(drawStarsLoop);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const btn = document.getElementById('triggerConstellationBtn');
    if (btn) {
      btn.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawStars();
        
        ctx.font = "bold 32px 'Dancing Script', cursive";
        ctx.fillStyle = "#FFD966";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "gold";
        ctx.fillText("✨ ALEJANDRA ✨", canvas.width / 2 - 110, canvas.height / 2);
        ctx.font = "bold 20px 'Quicksand'";
        ctx.fillText("La estrella más brillante", canvas.width / 2 - 120, canvas.height / 2 + 50);
        ctx.shadowBlur = 0;
        
        const finalDiv = document.getElementById('finalMessageDisplay');
        if (finalDiv) {
          finalDiv.classList.remove('hidden');
          finalDiv.innerHTML = `
            <p>🌟✨🌙💖🎂✨🌟</p>
            <p>Gracias por existir, Alejandra</p>
            <p>Gracias por tu sonrisa que ilumina mis días</p>
            <p>Gracias por ser tú, única e irrepetible</p>
            <p>🎂 ¡FELIZ CUMPLEAÑOS! 🎂</p>
            <p>🌟✨🌙💖🎂✨🌟</p>
          `;
        }
        showFloatingMessage("💫 Has revelado la constelación de Alejandra 💫");
      });
    }
  }
  
  // ========== MENSAJES SORPRESA ==========
  const sorpresas = [
    "🐾 Snoopy dice: ¡Woof! ¡Feliz cumpleaños, Alejandra! Eres mi humana favorita 💖",
    "🐦 Woodstock revolotea: ¡Pío pío! Hoy el cielo está más azul porque es tu día 🌟",
    "✨ El universo quería recordarte: brillas más que todas las estrellas juntas ✨",
    "🌙 Las estrellas te envían un abrazo cósmico en tu día especial 🌙",
    "🎈 Hoy es TU día, y el mundo lo sabe. ¡Felicidades! 🎈",
    "💫 ¿Sabías que hoy el universo está más brillante? Porque es tu cumpleaños 💫",
    "🌸 Una flor del jardín secreto susurra: 'Eres la más hermosa de todas' 🌸",
    "🎂 El pastel de Snoopy tiene una vela con tu nombre. ¡Pide un deseo! 🎂",
    "💖 Cada latido de mi corazón hoy tiene tu nombre 💖",
    "⭐ Si las estrellas pudieran hablar, te dirían 'Te amamos, Alejandra' ⭐",
    "🌙 La luna te manda un beso gigante desde el cielo 🌙",
    "🎉 ¡Bomba de confeti virtual! 🎉 ¡Feliz cumpleaños! 🎉"
  ];
  
  function startSurpriseMessages() {
    setInterval(() => {
      const msg = sorpresas[Math.floor(Math.random() * sorpresas.length)];
      showFloatingMessage(msg, 5000);
    }, 25000);
  }
  
  function showFloatingMessage(message, duration = 4500) {
    const container = document.getElementById('floatingMessageContainer');
    if (!container) return;
    const note = document.createElement('div');
    note.className = 'floating-note';
    note.innerText = message;
    container.appendChild(note);
    setTimeout(() => note.remove(), duration);
  }
  
  // ========== SORPRESA CUMPLEAÑOS ==========
  function showBirthdaySurprise() {
    const modal = document.getElementById('birthdayModal');
    const modalBody = document.getElementById('birthdayModalBody');
    
    if (modal && modalBody) {
      const surpriseMessages = [
        "🎂✨ ¡SORPRESA! ✨🎂<br><br>Hoy es un día muy especial porque tú viniste al mundo a hacerlo más bonito.<br><br>Que la vida te regale todo el amor que tú regalas.<br><br>🎉 ¡FELIZ CUMPLEAÑOS, ALEJANDRA! 🎉",
        "🌙💖 ¡ALERTA DE CUMPLEAÑOS! 💖🌙<br><br>Hoy las estrellas están de fiesta. Hoy el universo sonríe. Hoy es TU día.<br><br>Que todos tus sueños se hagan realidad, uno por uno.<br><br>🌟 Te mereces el mundo y más 🌟",
        "🎈🎁 ¡ABRE TU REGALO ESPECIAL! 🎁🎈<br><br>El regalo más grande que puedo darte es recordarte lo increíble que eres. Eres luz, eres magia, eres todo lo bonito del mundo.<br><br>🎂 ¡FELIZ DÍA! 🎂",
        "💖✨ MENSAJE DEL UNIVERSO ✨💖<br><br>Querida Alejandra,<br><br>Hoy todas las estrellas se alinearon para celebrarte. Eres una de las personas más especiales que existen, y el universo entero lo sabe.<br><br>🎂 ¡FELIZ CUMPLEAÑOS! 🎂"
      ];
      
      const randomMsg = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
      modalBody.innerHTML = randomMsg;
      modal.classList.remove('hidden');
      
      const closeBtn = modal.querySelector('.birthday-modal-close');
      if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
      modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });
      setTimeout(() => modal.classList.add('hidden'), 8000);
    }
  }
  
  function initBirthdayButton() {
    document.getElementById('birthdaySurpriseBtn')?.addEventListener('click', () => {
      showBirthdaySurprise();
      showFloatingMessage("🎂 ¡Has abierto una sorpresa de cumpleaños! 🎂");
    });
  }
  
  // ========== PARTÍCULAS ==========
  function initParticles() {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:999;width:100%;height:100%;overflow:hidden';
    document.body.appendChild(container);
    
    const icons = ['⭐', '🌟', '💫', '✨', '🎂', '🎈', '💖', '🌠', '💝', '🎉'];
    for (let i = 0; i < 200; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position:absolute;
        font-size:${Math.random() * 20 + 10}px;
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        animation:floatParticle ${Math.random() * 12 + 8}s infinite linear;
        animation-delay:${Math.random() * 8}s;
        opacity:${Math.random() * 0.6 + 0.2};
        pointer-events:none;
      `;
      particle.innerHTML = icons[Math.floor(Math.random() * icons.length)];
      container.appendChild(particle);
    }
  }
  
  // ========== EASTER EGGS ==========
  function initEasterEggs() {
    let logoClickCount = 0;
    document.querySelector('.nav-logo')?.addEventListener('click', () => {
      logoClickCount++;
      if (logoClickCount === 3) {
        showFloatingMessage("💖✨ ¡SECRETO DESCUBIERTO! ✨💖 Eres la constelación favorita de Snoopy");
        for (let i = 0; i < 10; i++) {
          setTimeout(() => showFloatingMessage("🎉 ✨ 🎂 💖 ⭐", 800), i * 150);
        }
        logoClickCount = 0;
      }
      setTimeout(() => logoClickCount = 0, 2000);
    });
    
    let secretCode = '';
    document.addEventListener('keydown', (e) => {
      secretCode += e.key.toUpperCase();
      if (secretCode.includes('ALE')) {
        showFloatingMessage("🎂 ¡Has invocado magia de cumpleaños! ✨🎂");
        for (let i = 0; i < 8; i++) {
          setTimeout(() => showFloatingMessage("🎉 ✨ 🎂", 500), i * 200);
        }
        secretCode = '';
      }
      if (secretCode.length > 10) secretCode = '';
    });
  }
  
  // ========== FULLSCREEN ==========
  document.getElementById('fullscreenBtn')?.addEventListener('click', () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  });
  
  // ========== ESTILOS ADICIONALES ==========
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatParticle {
      0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0; }
      20% { opacity: 0.8; }
      80% { opacity: 0.8; }
      100% { transform: translateY(-100vh) translateX(30px) rotate(360deg); opacity: 0; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
  
});