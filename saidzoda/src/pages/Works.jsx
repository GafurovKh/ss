const Works = () => {
    const worksData = [
      {
        name: "Абӯабдуллоҳи Рӯдакӣ",
        years: "(858–941)",
        famousWorks: ["Калила ва Димна", "Офариннома", "Ғазалҳо ва рубоиёт"],
        description: "Рӯдакӣ ҳамчун поягузори адабиёти классикии форсӣ бо ашъори пандомез ва лирикии худ маъруф аст."
      },
      {
        name: "Абулқосим Фирдавсӣ",
        years: "(940–1020)",
        famousWorks: ["Шоҳнома"],
        description: "'Шоҳнома' аз бузургтарин осори адабии ҷаҳон буда, таърихи Эронзаминро дар қолаби шеъри эпикӣ тасвир мекунад."
      },
      {
        name: "Носири Хусрав",
        years: "(1004–1088)",
        famousWorks: ["Сафарнома", "Девон"],
        description: "Носири Хусрав бо ашъори ирфонӣ ва сафарномаи худ дар таърих маъруф аст."
      },
      {
        name: "Саъдии Шерозӣ",
        years: "(1210–1292)",
        famousWorks: ["Гулистон", "Бӯстон"],
        description: "Асарҳои Саъдӣ пур аз ҳикмат ва панду андарз буда, арзиши ахлоқӣ ва иҷтимоӣ доранд."
      },
      {
        name: "Ҷалолиддини Румӣ",
        years: "(1207–1273)",
        famousWorks: ["Маснавии маънавӣ", "Девони Шамс"],
        description: "Маснавии Румӣ пур аз маърифати ирфонӣ буда, яке аз беҳтарин осори суфӣ ба шумор меравад."
      }
    ];
  
    return (
      <section>
        <h1>📜 Осори адибони классикии форсу тоҷик</h1>
        {worksData.map((author, index) => (
          <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>{author.name} {author.years}</h2>
            <p><strong>Осори машҳур:</strong> {author.famousWorks.join(", ")}</p>
            <p>{author.description}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default Works;
  