const Authors = () => {
  return (
    <section style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <article style={{ marginBottom: '40px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Абӯабдуллоҳи Рӯдакӣ</h2>
        <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src="/Rudaki-9.jpg"
            alt="Абӯабдуллоҳи Рӯдакӣ"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
          />
          <figcaption style={{ fontStyle: 'italic', color: '#555' }}>
            Абӯабдуллоҳи Рӯдакӣ – Падари шеъри форсӣ
          </figcaption>
        </figure>
        <p style={{ lineHeight: '1.6', color: '#444' }}>
          Рӯдакӣ (858–941) падари адабиёти классикии форсӣ маҳсуб мешавад. Вай бо шеърҳои пандомез ва лирикии
          худ дар рушди адабиёт таъсири амиқ гузоштааст.
        </p>
      </article>

      <article style={{ marginBottom: '40px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Абулқосими Фирдавсӣ</h2>
        <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src="/FIRDAVSI.jpg"
            alt="Абулқосими Фирдавсӣ"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px', width: '300px'}}
          />
          <figcaption style={{ fontStyle: 'italic', color: '#555' }}>
            Абулқосими Фирдавсӣ – Офаридгори Шоҳнома
          </figcaption>
        </figure>
        <p style={{ lineHeight: '1.6', color: '#444' }}>
          Фирдавсӣ (940–1020) муаллифи Шоҳнома аст, ки таърихи Эронзаминро дар қолаби шеърӣ баён мекунад ва аз
          бузургтарин асарҳои ҳамосии ҷаҳон маҳсуб мешавад.
        </p>
      </article>

      <article style={{ marginBottom: '40px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Абдураҳмони Ҷомӣ</h2>
        <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src="/jomi.jpg"
            alt="Абдураҳмони Ҷомӣ"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
          />
          <figcaption style={{ fontStyle: 'italic', color: '#555' }}>
            Абдураҳмони Ҷомӣ – Адиби ирфонӣ
          </figcaption>
        </figure>
        <p style={{ lineHeight: '1.6', color: '#444' }}>
          Ҷомӣ (1414–1492) шоир, донишманд ва мутафаккири бузург буд. Осори ӯ дар шеъру ирфон саҳми муҳим
          гузошта, то ҳол дар адабиёти тоҷик мавқеи хосса дорад.
        </p>
      </article>
    </section>
  );
};

export default Authors;
