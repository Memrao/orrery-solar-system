// JS to handle the back button functionality
document.querySelector('.back-button button').addEventListener('click', () => {
    window.history.back();
});

// Optionally, if you want to fetch data dynamically for the sections
window.addEventListener('DOMContentLoaded', () => {
    // If data is stored in a JSON format, for example:
    const neoData = {
        "sections": [{
                "title": "Near-Earth Objects (NEOs)",
                "content": "Near-Earth Objects (NEOs) are small celestial bodies, such as asteroids and comets, whose orbits bring them close to Earth. The realization that Earth exists within a cloud of orbiting NEOs, which can occasionally collide with the planet, has spurred extensive research. These objects provide opportunities for space exploration, as well as insights into the risks they may pose to life on Earth."
            },
            {
                "title": "Scientific Importance",
                "content": "NEOs are of great scientific interest because they hold records of the early solar system's formation and evolution. Studying their orbital characteristics, physical properties, and compositions allows researchers to infer their origins and history. These objects are some of the most accessible for exploration, with energy requirements to reach them often lower than that needed for a mission to the Moon. Additionally, they offer valuable opportunities for spacecraft missions to gather samples, furthering our understanding of the solar system."
            },
            {
                "title": "NEO Classification and Orbital Dynamics",
                "content": "NEOs are classified into three main groups based on their orbits relative to Earth's: Amor, Apollo, and Aten objects. Most NEOs originate from collisions in the main asteroid belt, with fragments eventually making their way into Earth-crossing orbits due to gravitational interactions with planets like Jupiter and Saturn."
            },
            {
                "title": "Physical and Chemical Properties",
                "content": "Research on NEOs involves assessing their size, shape, spin, and mass, as well as their chemical and mineralogical composition. These factors provide insight into the processes that shaped NEOs and help identify their relationships to meteorites and other solar system bodies. By studying these small worlds, scientists aim to better understand the events that occurred in the primordial solar nebula, which led to the formation of planets."
            },
            {
                "title": "Exploration and Hazard Mitigation",
                "content": "Understanding NEOs is crucial for developing strategies to mitigate potential impact hazards. Further exploration of NEOs, through both ground-based and space missions, will help identify which objects are most likely to collide with Earth and determine their potential consequences. NEOs are significant not only for scientific discovery but also for planetary defense, offering valuable insights into the early solar system and helping to develop measures to prevent potential catastrophes caused by asteroid impacts."
            }
        ]
    };

    // Populate the sections dynamically
    const sections = document.querySelectorAll('section');

    neoData.sections.forEach((data, index) => {
        if (sections[index]) {
            const h2 = sections[index].querySelector('h2') || sections[index].querySelector('h1');
            const p = sections[index].querySelector('p');

            if (h2) h2.textContent = data.title;
            if (p) p.textContent = data.content;
        }
    });
});