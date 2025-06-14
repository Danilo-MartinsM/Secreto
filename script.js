// Contador de tempo juntos (ajuste a data do início do relacionamento)
// Contador de tempo juntos (ajuste a data do início do relacionamento)
const startDate = new Date("2025-01-26T16:30:00");

function updateCounter() {
  // ... (seu código do contador)
}

setInterval(updateCounter, 1000);
updateCounter();

// --- Funções relacionadas aos vales ---
// Coloque aqui essa função (substituindo a que você já tem):
function redeemGift(giftId) {
  const gifts = [
    null,
    "Jantar romântico resgatado! Marque a data comigo. ❤️",
    "Dia de preguiça resgatado! Vamos ficar grudadinhos o dia todo. 🛏️💤",
    "Noite do filme confirmada! Já pego os cobertores. 🍿",
    "Pode esperar: vou te ligar ou mandar um áudio do jeitinho que você ama. 📞💘",
    "Piquenique ativado! Prepare-se pra algo fofo, nem que seja na sala. 🧺🍓",
    "Tarefa chata é comigo! Vou fazer com carinho e um sorriso. 🧼🧡",
    "Hoje você manda! Vale um dia livre, leve e divertido. 🕹️🍕",
    "Hora do carinho! Vou cuidar de você com mimos e amor. 💅💆‍♀️",
    "Você manda agora! Seu desejo é uma ordem (com amor). 😘🎲"
  ];

  const message = gifts[giftId] || "Vale desconhecido resgatado!";
  const giftName = document.querySelectorAll('.card h3')[giftId - 1]?.textContent || 'Vale desconhecido';

  sendEmail(giftName, message);

  const alertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('custom-alert-message');
  const alertClose = document.getElementById('custom-alert-close');

  alertMessage.textContent = message;
  alertBox.classList.remove('hidden');

  alertClose.onclick = () => {
    alertBox.classList.add('hidden');
  };
}

// Função que envia o email — coloque ela logo abaixo
function sendEmail(giftName, giftMessage) {
  emailjs.send("service_r3zuqgj", "template_95l501f", {
    gift_name: giftName,
    message: giftMessage,
    to_name: "Danilo"
  }).then(
    () => console.log("Email enviado com sucesso"),
    (error) => console.error("Erro ao enviar email:", error)
  );
}

// --- Outras funções do site (ex: animação dos corações) ---
// (deixe o restante do seu código das animações aqui, sem mudanças)







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

