// Contador de tempo juntos (ajuste a data do início do relacionamento)
const startDate = new Date("2025-01-26T16:30:00"); // Substitua pela data de vocês!

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);
updateCounter(); // Chama imediatamente

// Função para "resgatar" vales-presentes
function redeemGift(giftId) {
  const gifts = [
    null, // Índice 0 vazio
    "Jantar romântico resgatado! Marque a data comigo. ❤️",
    "Spa day ativado! Prepare-se para um dia de rainha.",
    "Noite do filme confirmada! Já pego os cobertores. 🍿",
    "Cinema resgatado! Vamos já para o catalogo de filmes. 🍿"
  ];

  const message = gifts[giftId];
  const alertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('custom-alert-message');
  const alertClose = document.getElementById('custom-alert-close');

  alertMessage.textContent = message;
  alertBox.classList.remove('hidden');

  alertClose.onclick = () => {
    alertBox.classList.add('hidden');
  };
}




// Função da chuva de corações - Versão otimizada e testada
function createHearts() {
  const colors = ['#ffffff', '#00aaff'];
  const symbols = ['💙', '🤍'];
  
  // Cria 30 corações (aumentei a quantidade)
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
      
      // Configuração de estilo otimizada
      Object.assign(heart.style, {
        left: Math.random() * 100 + 'vw',
        top: '-50px',
        position: 'fixed',
        animation: `float ${Math.random() * 3 + 2}s linear forwards`,
        fontSize: (Math.random() * 20 + 12) + 'px',
        color: colors[Math.floor(Math.random() * colors.length)],
        zIndex: '9999',
        pointerEvents: 'none',
        willChange: 'transform, opacity',
        textShadow: (heart.style.color === '#ffffff') ? '0 0 0 transparent' : '0 0 5px rgba(255,255,255,0.7)'
      });
      
      document.body.appendChild(heart);
      
      // Remove após animação de forma segura
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, i * 100); // Reduzi o delay entre corações
  }
}

// Evento principal - Versão testada e funcional
function initHeartAnimation() {
  const heart = document.querySelector('.heart');
  const overlay = document.getElementById('heart-overlay');

  if (!heart || !overlay) {
    console.error("Elementos não encontrados!");
    return false;
  }

  // Configuração inicial do coração
  Object.assign(heart.style, {
    cursor: 'pointer',
    willChange: 'transform, opacity'
  });
  
  heart.addEventListener('click', function() {
    console.log("Animação iniciada");
    
    // Previne múltiplos cliques
    heart.style.pointerEvents = 'none';
    
    // Animação principal do coração
    Object.assign(heart.style, {
      transition: "all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      transform: "rotate(45deg) scale(10)",
      opacity: "0"
    });

    // Esconde o overlay e ativa efeitos
    setTimeout(() => {
      overlay.style.display = 'none';
      createHearts();
    }, 1000);
  });
  
  return true;
}

// CSS dinâmico - Versão melhorada
function injectStyles() {
  const styleId = 'heart-animation-styles';
  
  // Remove estilos antigos se existirem
  const oldStyle = document.getElementById(styleId);
  if (oldStyle) oldStyle.remove();
  
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    @keyframes float {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.9;
      }
      100% {
        transform: translateY(120vh) rotate(360deg);
        opacity: 0;
      }
    }
    @keyframes fadeOut {
      to { 
        opacity: 0; 
        visibility: hidden; 
      }
    }
    .floating-heart {
      position: fixed;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      user-select: none;
    }
  `;
  document.head.appendChild(style);
}

// Inicialização segura
document.addEventListener('DOMContentLoaded', function() {
  injectStyles();
  
  if (initHeartAnimation()) {
    console.log("Script carregado com sucesso!");
  } else {
    console.error("Falha na inicialização do script");
  }
});

