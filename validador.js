(function() {
    // 1. LISTA DE DOMÍNIOS AUTORIZADOS
    // Substitua os exemplos abaixo pelos domínios reais (ex: 'www.meablog.com')
    const dominiosAutorizados = [
        'fyzomusic.blogspot.com', 
        'sfutteste.blogspot.com',
        'localhost' // Mantenha para testes locais
    ];

    const dominioAtual = window.location.hostname;

    if (dominiosAutorizados.includes(dominioAtual)) {
        // 2. CSS VITAL DO TEMA
        // Se autorizado, injeta o CSS que faz o tema funcionar.
        // Remova o CSS do XML original e cole aqui.
        const estiloEspecial = document.createElement('style');
        estiloEspecial.innerHTML = `

    /* --- MASTER CSS AZUL --- */
    :root { 
        --bg-black: #000000; 
        --bg-panel: #212121; 
        --text-main: #ffffff; 
        --text-sec: #aaaaaa; 
        --accent: #0088ff; /* MUDANÇA: Azul Vibrante */
        --nav-height: 64px; 
        --player-height: 80px; 
        --sidebar-width: 240px; 
    }

    * { margin:0; padding:0; box-sizing:border-box; outline:none; -webkit-tap-highlight-color:transparent; }
    body { background-color:var(--bg-black); color:var(--text-main); font-family:'Roboto', sans-serif; font-size:14px; overflow-x:hidden; padding-bottom:var(--player-height); }
    a { text-decoration:none; color:inherit; transition:0.2s; }
    ul { list-style:none; }
    
    /* Scrollbar */
    ::-webkit-scrollbar { width:8px; background:var(--bg-black); }
    ::-webkit-scrollbar-thumb { background:#333; border-radius:4px; }

    /* HEADER */
    #header-wrapper { position:fixed; top:0; left:0; width:100%; height:var(--nav-height); background:rgba(0,0,0,0.95); backdrop-filter:blur(10px); display:flex; align-items:center; justify-content:space-between; padding:0 20px; z-index:2000; border-bottom:1px solid #222; }
    .header-left { display:flex; align-items:center; gap:20px; }
    .menu-trigger { font-size:20px; cursor:pointer; padding:8px; }
    .header-logo { display:flex; align-items:center; }
    .search-trigger { font-size:20px; cursor:pointer; padding:8px; }

    /* SIDEBAR MENU */
    #sidebar-menu { position:fixed; top:0; left:0; width:280px; height:100%; background:var(--bg-panel); z-index:3000; transform:translateX(-100%); transition:transform 0.3s cubic-bezier(0.4,0,0.2,1); display:flex; flex-direction:column; border-right:1px solid #333; box-shadow:10px 0 30px rgba(0,0,0,0.5); }
    #sidebar-menu.open { transform:translateX(0); }
    .sidebar-header-mobile { padding:20px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #333; }
    .close-menu { cursor:pointer; font-size:24px; }
    .sidebar-scroll { flex:1; overflow-y:auto; }

    /* Estilos do Menu YTM */
    .ytm-menu-section { padding: 12px 0; }
    .ytm-divider { height: 1px; background: #333; margin: 10px 24px; }
    
    .material-menu li a { display: flex; align-items: center; padding: 12px 24px; color: #ccc; transition: 0.2s; font-size: 14px; font-weight: 500; }
    .material-menu li a:hover, .material-menu li.active a { color: #fff; background: rgba(255,255,255,0.05); }
    .material-menu .material-icons { font-size: 24px; margin-right: 20px; color: var(--accent); }
    
    .new-playlist-btn { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.1); color: white; width: calc(100% - 48px); margin: 0 24px; padding: 10px; border-radius: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 500; font-family: 'Roboto', sans-serif; }
    .new-playlist-btn:hover { background: rgba(255,255,255,0.2); }

    /* Biblioteca (Like System) */
    .library-section h3 { font-size:12px; text-transform:uppercase; color:var(--text-sec); margin:20px 24px 10px; letter-spacing:1px; }
    .library-list { display:flex; flex-direction:column; gap:5px; padding: 0 10px; }
    .lib-item { display:flex; align-items:center; gap:10px; padding:8px 14px; border-radius:6px; cursor:pointer; transition:0.2s; }
    .lib-item:hover { background:rgba(255,255,255,0.05); }
    .lib-thumb { width:36px; height:36px; border-radius:2px; object-fit:cover; }
    .lib-info { flex:1; overflow:hidden; }
    .lib-title { font-size:13px; font-weight:500; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .lib-artist { font-size:11px; color:var(--text-sec); }
    .lib-remove { color:#666; font-size:14px; padding:5px; }
    .lib-remove:hover { color:var(--accent); }
    .empty-lib { color:#666; font-size:13px; text-align:center; padding:20px; font-style:italic; }

    #menu-overlay { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:2500; opacity:0; pointer-events:none; transition:0.3s; }
    #menu-overlay.active { opacity:1; pointer-events:all; }

    /* SLIDER */
    #featured-slider { margin-top:calc(var(--nav-height) + 20px); padding:0 20px; display:none; }
    .slider-header { display:flex; align-items:center; margin-bottom:15px; gap:10px; }
    .slider-label { font-size:24px; font-weight:700; }
    .slider-tag { background:var(--accent); padding:2px 8px; border-radius:4px; font-size:10px; font-weight:bold; text-transform:uppercase; }
    .slider-container { display:flex; gap:20px; overflow-x:auto; scroll-snap-type:x mandatory; padding-bottom:15px; }
    .slider-card { min-width:280px; height:160px; background:var(--bg-panel); border-radius:8px; scroll-snap-align:start; position:relative; overflow:hidden; cursor:pointer; display:flex; border:1px solid #333; }
    .slider-img { width:40%; height:100%; object-fit:cover; }
    .slider-info { padding:15px; display:flex; flex-direction:column; justify-content:center; width:60%; }
    .slider-title { font-size:15px; font-weight:700; margin-bottom:5px; line-height:1.3; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
    .slider-artist { color:var(--text-sec); font-size:12px; }

    /* GRID & POSTS */
    .content-wrapper { padding:20px; max-width:1400px; margin:0 auto; }
    .section-title { font-size:22px; font-weight:700; margin-bottom:20px; padding-top:10px; }
    .blog-posts { display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:20px; }
    .post-card { display:flex; flex-direction:column; cursor:pointer; position:relative; border-radius:6px; padding:10px; transition:0.2s; }
    .post-card:hover { background: #1a1a1a; }
    .post-cover-wrap { width:100%; aspect-ratio:1/1; background:#1a1a1a; border-radius:4px; overflow:hidden; position:relative; margin-bottom:10px; }
    .post-cover-wrap img { width:100%; height:100%; object-fit:cover; transition:0.3s; }
    .post-card:hover .post-cover-wrap img { opacity: 0.6; }
    .post-cover-overlay { position:absolute; top:0; left:0; right:0; bottom:0; display:flex; align-items:center; justify-content:center; opacity:0; transition:0.2s; }
    .post-card:hover .post-cover-overlay { opacity:1; }
    .overlay-btn { width:48px; height:48px; background:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#000; font-size:20px; }
    .post-info-title { font-weight:500; font-size:15px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:#fff; }
    .post-info-artist { font-size:13px; color:var(--text-sec); margin-top:4px; height:16px; overflow:hidden; }

    /* PLAYER BAR */
    #music-player-bar { position:fixed; bottom:0; left:0; width:100%; height:var(--player-height); background:#181818; border-top:1px solid #333; display:flex; align-items:center; justify-content:space-between; padding:0 24px; z-index:4000; transform:translateY(110%); transition:transform 0.4s cubic-bezier(0.2,0.8,0.2,1); }
    #music-player-bar.active { transform:translateY(0); }
    .player-progress-container { position:absolute; top:-3px; left:0; width:100%; height:3px; background:#333; cursor:pointer; }
    .player-progress-fill { height:100%; background:var(--accent); width:0%; }
    .player-left { display:flex; align-items:center; gap:16px; flex:1; min-width:0; }
    .player-thumb { width:56px; height:56px; border-radius:4px; object-fit:cover; background:#000; }
    .player-info { display:flex; flex-direction:column; justify-content:center; overflow:hidden; }
    .player-title { font-size:14px; font-weight:500; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:#fff; }
    .player-artist { font-size:12px; color:var(--text-sec); }
    .player-controls { display:flex; align-items:center; gap:20px; flex:1; justify-content:center; }
    .ctrl-btn { color:#ddd; font-size:20px; cursor:pointer; background:none; border:none; }
    .play-pause-btn { width:40px; height:40px; background:#fff; color:#000; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:20px; cursor:pointer; border:none; }
    
    /* Like Heart */
    .like-btn { color:#666; font-size:20px; cursor:pointer; transition:0.2s; }
    .like-btn.liked { color:var(--accent); }

    .player-right { flex:1; display:flex; justify-content:flex-end; align-items:center; gap:20px; }
    .action-btn { color:var(--text-sec); font-size:18px; cursor:pointer; display:flex; flex-direction:column; align-items:center; }
    .action-label { font-size:9px; text-transform:uppercase; letter-spacing:0.5px; opacity:0.7; }

    /* MODALS */
    #lyrics-overlay { position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); backdrop-filter:blur(8px); z-index:5000; display:none; align-items:center; justify-content:center; opacity:0; transition:opacity 0.3s; }
    #lyrics-overlay.show { opacity:1; }
    .lyrics-box { background:#1e1e1e; width:90%; max-width:450px; height:70vh; border-radius:12px; display:flex; flex-direction:column; border:1px solid #333; }
    .lyrics-header { padding:20px; border-bottom:1px solid #333; display:flex; justify-content:space-between; align-items:center; background:#252525; border-radius:12px 12px 0 0; }
    .lyrics-content { padding:30px 20px; overflow-y:auto; text-align:center; font-size:16px; line-height:1.8; color:#ddd; white-space:pre-wrap; }
    
    /* CORREÇÃO DO BOTÃO X */
    .close-lyrics-btn { cursor:pointer; font-size:24px; color:#fff; display: block !important; }

    /* SEARCH */
    #search-overlay { display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:#000; z-index:3000; flex-direction:column; padding:20px; }
    .search-input-wrap { display:flex; align-items:center; border-bottom:1px solid #333; padding-bottom:10px; margin-bottom:20px; }
    #search-input { background:transparent; border:none; color:white; font-size:20px; width:100%; }
    .live-item { display:flex; align-items:center; gap:15px; padding:12px 0; border-bottom:1px solid #222; cursor:pointer; }
    .live-thumb { width:50px; height:50px; border-radius:4px; object-fit:cover; }
    .hidden-data { display:none !important; }

    /* --- RESPONSIVIDADE DESKTOP (REPLICA YTM) --- */
    @media (min-width: 1024px) {
        /* Header Desktop */
        #header-wrapper { height: 64px; background: #030303 !important; border-bottom: 1px solid #1a1a1a; display: grid; grid-template-columns: 240px 1fr 100px; padding: 0 16px; }
        .menu-trigger { display: none !important; }
        .header-left { width: 100%; }
        .search-trigger { display: none; }
        
        /* Barra de Pesquisa Falsa (Visual) */
        .header-right::before { content: 'Pesquise músicas, álbuns...'; display: flex; align-items: center; padding-left: 15px; color: #888; position: fixed; top: 12px; left: 50%; transform: translateX(-50%); width: 400px; height: 40px; background: #212121; border-radius: 8px; font-size: 14px; cursor: text; z-index: 2500; }
        .header-right { width: 100%; height: 100%; cursor: text; }
        .header-right:active .header-right::before { background: #333; }

        /* Sidebar Desktop Fixa */
        #sidebar-menu { transform: translateX(0) !important; top: 64px !important; left: 0 !important; width: 240px !important; height: calc(100vh - 64px - 80px) !important; background: #030303 !important; border-right: none !important; padding-top: 10px; z-index: 1000; box-shadow: none !important; }
        .sidebar-header-mobile, .close-menu { display: none !important; }
        
        /* Ajuste de Itens Menu */
        .material-menu li a { padding: 10px 24px !important; border-radius: 0 !important; }
        .material-menu li.active a { background: #212121; }

        /* Conteúdo Principal */
        .content-wrapper { margin-left: 240px !important; padding: 24px 40px !important; width: auto !important; max-width: none !important; background: #000; min-height: 100vh; }
        #featured-slider { margin-left: 240px !important; margin-top: 90px !important; padding-left: 40px; }
        
        /* Grid PC */
        .blog-posts { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)) !important; gap: 24px !important; }
        .post-card { background: transparent !important; }
        
        #menu-overlay { display: none !important; }
    }
    @media (max-width: 768px) { .player-right { gap:15px; } .action-label { display:none; } .player-left { max-width:55%; } }
  

        `;
        document.head.appendChild(estiloEspecial);
    } else {
        // 3. AVISO DE PIRATARIA
        // Se NÃO autorizado, bloqueia o blog e mostra o aviso.
        document.documentElement.innerHTML = `
            <div style="text-align:center; margin-top:100px; font-family:sans-serif;">
                <h2>Esta cópia do tema não está licenciada!</h2>
                <p>Adquira uma licença oficial para utilizar este template.</p>
                <a href="https://arcanjosete.blogspot.com" style="color:blue;">Clique aqui para comprar</a>
            </div>
        `;
        // Opcional: Redireciona para sua loja após 5 segundos
        setTimeout(function() {
            window.location.href = 'https://arcanjosete.blogspot.com';
        }, 5000);
    }
})();
