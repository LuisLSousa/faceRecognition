const particlesParams = {
    background: {
        color: {
            value: "#0f0f0f",
        },
    },
    fpsLimit: 60,
    interactivity: {
        detectsOn: "window",
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse", // repulse, grab, bubble
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 20,
            },
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.8,
                },
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
}

export default particlesParams;

/* // Old using react-particles-js
const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    size:{
      value: 3,
      random: true,
      anim:{
        random: true,
      }
    },
   },
  interactivity: {
    "detect_on": "window", // use this to interact with the particles even when there are boxes above the particles 
    events:{
      onhover:{
        enable: true,
        mode: 'repulse',
      },
      resize: true
    }
  },
  retina_detect: true
}
*/