<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>🍑 Projeto Ampulheta - Miriã</title>

  <meta name="theme-color" content="#ff2d7a" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">

  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>

  <style>
    :root{
      --bg1:#fff0f6;
      --bg2:#ffe6f0;
      --card:#ffffff;
      --pink:#ff2d7a;
      --pink2:#ff5aa5;
      --text:#1c1c1c;
      --muted:#6b6b6b;
      --shadow: 0 14px 40px rgba(255,45,122,.18);
      --shadow2: 0 10px 24px rgba(0,0,0,.08);
      --radius: 18px;
    }

    *{ box-sizing:border-box; }
    body{
      margin:0;
      font-family: Inter, Arial, sans-serif;
      color:var(--text);
      background: radial-gradient(1200px 700px at 50% -200px, #ffffff 0%, var(--bg1) 40%, var(--bg2) 100%);
      padding: 18px 14px 92px;
    }

    .wrap{ max-width: 980px; margin: 0 auto; }

    header{
      display:flex; align-items:center; justify-content:space-between;
      gap:12px;
      margin: 10px 0 16px;
    }

    .brand{
      display:flex; gap:10px; align-items:center;
    }
    .logo{
      width:44px; height:44px; border-radius:14px;
      display:grid; place-items:center;
      background: linear-gradient(135deg, var(--pink) 0%, var(--pink2) 100%);
      color:white; font-weight:800;
      box-shadow: var(--shadow);
    }
    h1{
      margin:0;
      font-size: 18px;
      line-height:1.1;
    }
    .subtitle{
      margin: 2px 0 0;
      color: var(--muted);
      font-size: 12px;
    }

    .pill{
      padding:10px 12px;
      border-radius: 999px;
      background: rgba(255,45,122,.12);
      color: var(--pink);
      font-weight: 700;
      font-size: 12px;
      border: 1px solid rgba(255,45,122,.18);
      white-space: nowrap;
    }

    .grid{
      display:grid;
      grid-template-columns: 1fr;
      gap: 12px;
    }

    @media (min-width: 900px){
      .grid{
        grid-template-columns: 1.05fr .95fr;
        align-items:start;
      }
    }

    .card{
      background: var(--card);
      border-radius: var(--radius);
      box-shadow: var(--shadow2);
      border: 1px solid rgba(0,0,0,.04);
      overflow:hidden;
    }

    .cardHead{
      padding: 14px 14px 0;
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:12px;
    }
    .cardTitle{
      margin:0;
      font-size: 15px;
      font-weight: 800;
      letter-spacing: .2px;
    }
    .cardNote{
      margin: 6px 0 0;
      font-size: 12px;
      color: var(--muted);
    }
    .cardBody{ padding: 14px; padding-top: 10px; }

    .row{
      display:grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin: 10px 0;
    }
    @media (min-width: 560px){
      .row2{ grid-template-columns: 1fr 1fr; }
      .row3{ grid-template-columns: 1fr 1fr 1fr; }
    }

    label{ font-size: 12px; color: var(--muted); display:block; margin-bottom: 6px; }
    input, select, textarea{
      width: 100%;
      padding: 10px 10px;
      border-radius: 12px;
      border: 1px solid rgba(0,0,0,.10);
      outline: none;
      font-family: inherit;
      background: #fff;
    }
    textarea{ min-height: 70px; resize: vertical; }

    .btnRow{ display:flex; flex-wrap:wrap; gap: 8px; margin-top: 10px; }
    button{
      background: linear-gradient(135deg, var(--pink) 0%, var(--pink2) 100%);
      color:white;
      border:none;
      padding: 10px 12px;
      border-radius: 12px;
      cursor:pointer;
      font-weight: 800;
      font-size: 13px;
      box-shadow: 0 10px 22px rgba(255,45,122,.22);
    }
    button.secondary{
      background: rgba(0,0,0,.04);
      color: #1f1f1f;
      box-shadow:none;
      border: 1px solid rgba(0,0,0,.06);
      font-weight: 700;
    }
    button.ghost{
      background: transparent;
      color: var(--pink);
      box-shadow: none;
      border: 1px solid rgba(255,45,122,.22);
      font-weight: 800;
    }

    .progress{
      background: rgba(255,45,122,.12);
      border-radius: 999px;
      height: 14px;
      overflow:hidden;
      border: 1px solid rgba(255,45,122,.18);
      margin: 10px 0 6px;
    }
    .bar{
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, var(--pink) 0%, var(--pink2) 100%);
      transition: .25s ease;
    }

    .small{ font-size: 12px; color: var(--muted); }
    .strong{ font-weight: 800; color: #1a1a1a; }

    .divider{
      height:1px;
      background: rgba(0,0,0,.06);
      margin: 12px 0;
    }

    .chips{ display:flex; flex-wrap:wrap; gap:8px; margin-top: 8px; }
    .chip{
      padding: 8px 10px;
      border-radius: 999px;
      font-size: 12px;
      background: rgba(255,45,122,.10);
      color: var(--pink);
      border: 1px solid rgba(255,45,122,.16);
      font-weight: 700;
    }

    .dayBtns{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:10px;
      margin-top: 10px;
    }
    @media (min-width: 560px){
      .dayBtns{ grid-template-columns: 1fr 1fr 1fr; }
    }
    .dayBtn{
      border-radius: 16px;
      padding: 12px;
      background: linear-gradient(135deg, rgba(255,45,122,.12) 0%, rgba(255,90,165,.10) 100%);
      border: 1px solid rgba(255,45,122,.18);
      cursor:pointer;
      text-align:left;
      box-shadow:none;
      color:#1c1c1c;
    }
    .dayBtn .t{ font-weight: 900; font-size: 13px; }
    .dayBtn .s{ font-size: 12px; color: var(--muted); margin-top: 4px; }
    .dayBtn.active{
      background: linear-gradient(135deg, var(--pink) 0%, var(--pink2) 100%);
      color:white;
    }
    .dayBtn.active .s{ color: rgba(255,255,255,.92); }

    .exList{ margin-top: 10px; }
    .ex{
      display:flex;
      gap:10px;
      padding: 12px;
      border-radius: 16px;
      border: 1px solid rgba(0,0,0,.06);
      background: #fff;
      margin-bottom: 10px;
    }
    .ex input[type="checkbox"]{ width:18px; height:18px; margin-top: 3px; }
    .ex h4{ margin:0; font-size: 13px; font-weight: 900; }
    .ex .meta{ margin: 4px 0 0; font-size: 12px; color: var(--muted); }
    .ex a{
      display:inline-block;
      margin-top: 6px;
      font-size: 12px;
      font-weight: 900;
      color: var(--pink);
      text-decoration:none;
    }

    .ok{
      display:inline-block;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(0,190,120,.10);
      border: 1px solid rgba(0,190,120,.18);
      color: #008e5a;
      font-size: 12px;
      font-weight: 800;
      margin-top: 8px;
    }

    .warn{
      display:inline-block;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(255,160,0,.12);
      border: 1px solid rgba(255,160,0,.22);
      color: #a86b00;
      font-size: 12px;
      font-weight: 800;
      margin-top: 8px;
    }

    .score{
      display:flex; gap:8px; align-items:center; flex-wrap:wrap;
      margin-top: 10px;
    }
    .badge{
      padding: 7px 10px;
      border-radius: 999px;
      border: 1px solid rgba(0,0,0,.06);
      background: rgba(0,0,0,.03);
      font-weight: 900;
      font-size: 12px;
    }

    .photosGrid{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:10px;
      margin-top: 10px;
    }
    @media (min-width: 760px){
      .photosGrid{ grid-template-columns: 1fr 1fr 1fr; }
    }
    .photoCard{
      border-radius: 16px;
      overflow:hidden;
      border: 1px solid rgba(0,0,0,.06);
      background:#fff;
    }
    .photoCard img{
      width:100%;
      height: 180px;
      object-fit: cover;
      display:block;
    }
    .photoCard .p{
      padding: 10px;
      font-size: 12px;
      color: var(--muted);
    }

    /* Bottom nav (estilo Instagram) */
    .nav{
      position: fixed;
      left: 0; right: 0; bottom: 0;
      background: rgba(255,255,255,.92);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(0,0,0,.08);
      padding: 10px 10px 12px;
      z-index: 999;
    }
    .navInner{
      max-width: 980px;
      margin: 0 auto;
      display:flex;
      justify-content:space-around;
      gap: 8px;
    }
    .navBtn{
      flex: 1;
      text-align:center;
      padding: 10px 8px;
      border-radius: 14px;
      border: 1px solid rgba(0,0,0,.06);
      background: rgba(0,0,0,.02);
      color: #1b1b1b;
      font-weight: 900;
      font-size: 12px;
      cursor:pointer;
      user-select:none;
    }
    .navBtn.active{
      background: linear-gradient(135deg, var(--pink) 0%, var(--pink2) 100%);
      color: white;
      border-color: rgba(255,45,122,.25);
      box-shadow: 0 12px 28px rgba(255,45,122,.22);
    }

    .section{ display:none; }
    .section.active{ display:block; }

    .hint{
      margin-top: 10px;
      padding: 10px 12px;
      border-radius: 16px;
      background: rgba(255,45,122,.07);
      border: 1px solid rgba(255,45,122,.14);
      color: #2a2a2a;
      font-size: 12px;
      line-height: 1.35;
    }
  </style>
</head>

<body>
  <div class="wrap">
    <header>
      <div class="brand">
        <div class="logo">🍑</div>
        <div>
          <h1>Projeto Ampulheta da <span style="color:var(--pink)">Miriã</span></h1>
          <div class="subtitle">Treino + evolução + medidas + água + intestino + proteína + fotos (salvo no celular/PC)</div>
        </div>
      </div>
      <div class="pill">✨ Versão App • Luxo</div>
    </header>

    <div class="grid">
      <!-- COLUNA ESQUERDA -->
      <div class="card section active" id="secTreino">
        <div class="cardHead">
          <div>
            <h2 class="cardTitle">🏋️ Treino SEG–SEX (Ampulheta B)</h2>
            <p class="cardNote">🎯 Costas + Postura + Core (vácuo) + Glúteo forte = cintura mais desenhada e curvas equilibradas.</p>
          </div>
          <div class="chips">
            <span class="chip">🍑 Glúteo</span>
            <span class="chip">🧍 Postura</span>
            <span class="chip">⏳ Cintura</span>
          </div>
        </div>

        <div class="cardBody">
          <div class="dayBtns" id="dayBtns"></div>

          <div class="hint">
            ✅ Descanso: <b>1m30</b> nos principais (Hip Thrust / Leg Press / Agachamento).<br>
            ✅ Acessórios: <b>45s–1m</b>.<br>
            ✅ Se doer MUITO (tipo escada impossível), reduza 1 série nos exercícios e mantenha a técnica perfeita.
          </div>

          <div class="divider"></div>

          <div id="dayTitle" class="strong"></div>
          <div class="small" id="daySub"></div>
          <div class="exList" id="exList"></div>

          <div class="btnRow">
            <button onclick="marcarTreinoFeito()">✅ Marcar treino do dia como feito</button>
            <button class="secondary" onclick="desmarcarTreinoFeito()">↩️ Desmarcar</button>
          </div>

          <div id="treinoStatus" class="small" style="margin-top:8px;"></div>
        </div>
      </div>

      <!-- COLUNA DIREITA -->
      <div>
        <div class="card section active" id="secAgua">
          <div class="cardHead">
            <div>
              <h2 class="cardTitle">💧 Água (ml) + média 7 dias</h2>
              <p class="cardNote">Você digita ml manualmente ou usa botões. Salva automaticamente.</p>
            </div>
            <div class="chips">
              <span class="chip">📊 7 dias</span>
              <span class="chip">✅ Meta</span>
            </div>
          </div>

          <div class="cardBody">
            <div class="row row2">
              <div>
                <label>🎯 Meta diária (ml)</label>
                <input type="number" id="metaAgua" value="2500" />
              </div>
              <div>
                <label>➕ Adicionar manualmente (ml)</label>
                <input type="number" id="aguaManual" placeholder="Ex: 300" />
              </div>
            </div>

            <div class="btnRow">
              <button onclick="addManual()">➕ Somar</button>
              <button class="ghost" onclick="addAgua(470)">+470 ml</button>
              <button class="ghost" onclick="addAgua(250)">+250 ml</button>
              <button class="secondary" onclick="desfazerAgua()">↩️ Desfazer</button>
              <button class="secondary" onclick="zerarAgua()">🧹 Zerar hoje</button>
            </div>

            <div class="progress"><div class="bar" id="barAgua"></div></div>
            <div id="statusAgua" class="small"></div>
            <div id="media7" class="small"></div>
          </div>
        </div>

        <div class="card section" id="secProteina" style="margin-top:12px;">
          <div class="cardHead">
            <div>
              <h2 class="cardTitle">🍽️ Proteína automática</h2>
              <p class="cardNote">Você coloca as quantidades e o app soma a proteína do dia.</p>
            </div>
            <div class="chips">
              <span class="chip">🎯 Meta</span>
              <span class="chip">📈 Progresso</span>
            </div>
          </div>

          <div class="cardBody">
            <div class="row row2">
              <div>
                <label>🎯 Meta de proteína (g/dia)</label>
                <input type="number" id="metaProt" value="100" />
              </div>
              <div>
                <label>📅 Data (automático)</label>
                <input type="text" id="dataProt" disabled />
              </div>
            </div>

            <div class="row row3">
              <div>
                <label>🍗 Frango (g)</label>
                <input type="number" id="pFrango" placeholder="Ex: 150" />
                <div class="small">31g/100g</div>
              </div>
              <div>
                <label>🥩 Carne (g)</label>
                <input type="number" id="pCarne" placeholder="Ex: 120" />
                <div class="small">26g/100g</div>
              </div>
              <div>
                <label>🧀 Queijo (g)</label>
                <input type="number" id="pQueijo" placeholder="Ex: 30" />
                <div class="small">25g/100g</div>
              </div>
            </div>

            <div class="row row3">
              <div>
                <label>🥚 Ovo (unid.)</label>
                <input type="number" id="pOvo" placeholder="Ex: 2" />
                <div class="small">6g/un</div>
              </div>
              <div>
                <label>🥛 Iogurte (unid.)</label>
                <input type="number" id="pIogurte" placeholder="Ex: 1" />
                <div class="small">10g/un</div>
              </div>
              <div>
                <label>🥤 Whey (scoop)</label>
                <input type="number" id="pWhey" placeholder="Ex: 1" />
                <div class="small">20g/scoop</div>
              </div>
            </div>

            <div class="btnRow">
              <button onclick="salvarProteina()">💾 Salvar proteína do dia</button>
              <button class="secondary" onclick="limparProteina()">🧹 Limpar campos</button>
            </div>

            <div class="progress"><div class="bar" id="barProt"></div></div>
            <div id="statusProt" class="small"></div>
            <div id="histProt" class="small"></div>
          </div>
        </div>

        <div class="card section" id="secIntestino" style="margin-top:12px;">
          <div class="cardHead">
            <div>
              <h2 class="cardTitle">🚽 Intestino + Chia</h2>
              <p class="cardNote">Acompanhar se água morna + chia está ajudando.</p>
            </div>
            <div class="chips">
              <span class="chip">🧡 Constância</span>
              <span class="chip">🗓️ Diário</span>
            </div>
          </div>

          <div class="cardBody">
            <div class="row row2">
              <div>
                <label>Hoje fui ao banheiro?</label>
                <select id="intestinoSel">
                  <option value="nao">Não</option>
                  <option value="sim">Sim</option>
                  <option value="pouco">Pouquinho</option>
                </select>
              </div>
              <div>
                <label>Marcar hábito</label>
                <div style="display:flex;gap:10px;align-items:center;padding:10px;border:1px solid rgba(0,0,0,.10);border-radius:12px;">
                  <input type="checkbox" id="chiaCheck" style="width:18px;height:18px;">
                  <div class="small"><b>🌿 Tomei água morna + chia</b><br>(hidratar 10 min em jejum)</div>
                </div>
              </div>
            </div>

            <div class="btnRow">
              <button onclick="salvarIntestino()">💾 Salvar</button>
              <button class="secondary" onclick="limparIntestinoHoje()">🧹 Limpar hoje</button>
            </div>

            <div id="historicoIntestino" class="small" style="margin-top:10px;"></div>
          </div>
        </div>

        <div class="card section" id="secMedidas" style="margin-top:12px;">
          <div class="cardHead">
            <div>
              <h2 class="cardTitle">📏 Medidas + Ampulheta</h2>
              <p class="cardNote">📌 Medidas: <b>a cada 15 dias</b> • Fotos: <b>a cada 30 dias</b></p>
            </div>
            <div class="chips">
              <span class="chip">🍑 glúteo</span>
              <span class="chip">⏳ proporção</span>
            </div>
          </div>

          <div class="cardBody">
            <div class="row row2">
              <div>
                <label>Peso (kg)</label>
                <input type="number" id="peso" placeholder="Ex: 56.9">
              </div>
              <div>
                <label>Cintura (cm)</label>
                <input type="number" id="cintura" placeholder="Ex: 72">
              </div>
            </div>

            <div class="row row2">
              <div>
                <label>Abdômen (cm)</label>
                <input type="number" id="abdomen" placeholder="Ex: 81">
              </div>
              <div>
                <label>Glúteo (cm)</label>
                <input type="number" id="gluteo" placeholder="Ex: 96">
              </div>
            </div>

            <div class="btnRow">
              <button onclick="salvarMedidas()">💾 Salvar medidas</button>
              <button class="secondary" onclick="limparCamposMedidas()">🧹 Limpar campos</button>
            </div>

            <div class="score" id="scoreBox"></div>

            <div class="divider"></div>

            <div class="small strong">📊 Gráfico de evolução do glúteo</div>
            <canvas id="chartGluteo" height="120" style="margin-top:10px;"></canvas>

            <div id="ultimaMedida" class="small" style="margin-top:10px;"></div>
          </div>
        </div>

        <div class="card section" id="secFotos" style="margin-top:12px;">
          <div class="cardHead">
            <div>
              <h2 class="cardTitle">📸 Fotos (Antes/Depois)</h2>
              <p class="cardNote">Sugestão: foto a cada <b>30 dias</b> (mesma roupa, luz e posição).</p>
            </div>
            <div class="chips">
              <span class="chip">🗓️ 30 dias</span>
              <span class="chip">✨ evolução</span>
            </div>
          </div>

          <div class="cardBody">
            <div class="row row2">
              <div>
                <label>Tipo</label>
                <select id="fotoTipo">
                  <option value="antes">Antes</option>
                  <option value="depois">Depois</option>
                  <option value="checkin">Check-in</option>
                </select>
              </div>
              <div>
                <label>Legenda (opcional)</label>
                <input id="fotoLegenda" placeholder="Ex: 30 dias / cintura mais marcada" />
              </div>
            </div>

            <div class="row">
              <div>
                <label>Enviar foto (fica salva no seu navegador)</label>
                <input type="file" id="fotoFile" accept="image/*" />
                <div class="small">⚠️ Dica: salve poucas fotos (2–8). Fotos muito grandes podem encher a memória do navegador.</div>
              </div>
            </div>

            <div class="btnRow">
              <button onclick="salvarFoto()">💾 Salvar foto</button>
              <button class="secondary" onclick="limparFotos()">🗑️ Apagar todas as fotos</button>
            </div>

            <div class="photosGrid" id="photosGrid"></div>
          </div>
        </div>

        <div class="card section" id="secMetas" style="margin-top:12px;">
          <div class="cardHead">
            <div>
              <h2 class="cardTitle">🎯 Metas semanais</h2>
              <p class="cardNote">A semana reinicia automaticamente (Segunda → Domingo).</p>
            </div>
            <div class="chips">
              <span class="chip">✅ consistência</span>
              <span class="chip">📈 evolução</span>
            </div>
          </div>

          <div class="cardBody">
            <div class="small">
              ✅ <b>Treinos</b>: marcar 4–5/semana<br>
              ✅ <b>Água</b>: bater meta 5x/semana<br>
              ✅ <b>Proteína</b>: bater meta 5x/semana
            </div>

            <div class="divider"></div>

            <div id="metasResumo" class="small"></div>

            <div class="divider"></div>

            <div class="btnRow">
              <button class="secondary" onclick="recalcularMetas()">🔄 Atualizar metas</button>
              <button class="secondary" onclick="resetSemana()">🧹 Resetar semana (se precisar)</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Bottom nav -->
  <div class="nav">
    <div class="navInner">
      <div class="navBtn active" data-go="secTreino">🏋️ Treino</div>
      <div class="navBtn" data-go="secAgua">💧 Água</div>
      <div class="navBtn" data-go="secProteina">🍽️ Proteína</div>
      <div class="navBtn" data-go="secMedidas">📏 Medidas</div>
      <div class="navBtn" data-go="secFotos">📸 Fotos</div>
      <div class="navBtn" data-go="secMetas">🎯 Metas</div>
    </div>
  </div>

<script>
/* ========= UTIL ========= */
function hoje(){
  return new Date().toISOString().split("T")[0];
}
function fmtDataBR(iso){
  const [y,m,d] = iso.split("-");
  return `${d}/${m}/${y}`;
}
function getWeekKey(dateObj = new Date()){
  // chave da semana iniciando na segunda
  const d = new Date(dateObj);
  const day = d.getDay(); // 0=domingo ... 1=seg
  const diff = (day === 0 ? -6 : 1 - day); // voltar para segunda
  d.setDate(d.getDate() + diff);
  const mondayIso = d.toISOString().split("T")[0];
  return "week_" + mondayIso;
}
function clamp(n,min,max){ return Math.max(min, Math.min(max,n)); }

/* ========= STORAGE ========= */
let dados = JSON.parse(localStorage.getItem("app_miria_ampulheta")) || {
  agua: {},            // {date:{total,pilha[]}}
  intestino: {},       // {date:{foi,chia}}
  medidas: [],         // [{data,peso,cintura,abdomen,gluteo,ratio}]
  proteina: {},        // {date:{meta, frango,carne,queijo,ovo,iogurte,whey, total}}
  treinosFeitos: {},   // {date:{seg:true,...}} ou {date:true} simples
  fotos: []            // [{id,date,tipo,legenda,dataUrl}]
};

function salvarAll(){
  localStorage.setItem("app_miria_ampulheta", JSON.stringify(dados));
}

/* ========= TREINOS (SEG–SEX) ========= */
const treino = {
  seg: {
    titulo: "Segunda — Glúteo / Posterior 🍑",
    sub: "Foco: posterior + glúteo com técnica perfeita (crescer mais rápido).",
    ex: [
      {n:"1️⃣ Cadeira Flexora", s:"3×12", w:"👉 20–25kg", t:"Controle total. Sem tirar o quadril do banco.", v:"https://www.youtube.com/results?search_query=cadeira+flexora+como+fazer+correto"},
      {n:"2️⃣ Stiff com Halter", s:"3×12", w:"👉 6–8kg cada lado", t:"Coluna neutra. Desce devagar. Sente alongar posterior.", v:"https://www.youtube.com/results?search_query=stiff+com+halter+como+fazer"},
      {n:"3️⃣ Elevação pélvica (Hip Thrust)", s:"4×12", w:"👉 20kg (meta evoluir)", t:"Pausa 1s no topo. Queixo levemente para baixo. Sem arquear lombar.", v:"https://www.youtube.com/results?search_query=eleva%C3%A7%C3%A3o+p%C3%A9lvica+como+fazer"},
      {n:"4️⃣ Abdutora Máquina", s:"3×15", w:"👉 30–35kg", t:"Inclina levemente pra frente e segura 1s aberta (glúteo lateral).", v:"https://www.youtube.com/results?search_query=abdutora+m%C3%A1quina+como+usar"},
      {n:"🚶‍♀️ Cardio (opcional)", s:"12 min", w:"👉 esteira inclinada", t:"Leve/moderado pra ajudar barriga sem perder glúteo.", v:"https://www.youtube.com/results?search_query=esteira+inclinada+como+fazer"}
    ]
  },
  ter: {
    titulo: "Terça — Peito + Ombro (firmeza do colo) 💗",
    sub: "Foco: firmeza do colo + postura bonita.",
    ex: [
      {n:"1️⃣ Supino Inclinado (máquina)", s:"3×12", w:"👉 15–20kg", t:"Peito aberto. Ombros pra baixo. Controla a volta.", v:"https://www.youtube.com/results?search_query=supino+inclinado+m%C3%A1quina+como+fazer"},
      {n:"2️⃣ Crucifixo (máquina)", s:"3×12", w:"👉 12–15kg", t:"Movimento controlado. Não esticar demais.", v:"https://www.youtube.com/results?search_query=crucifixo+m%C3%A1quina+como+fazer"},
      {n:"3️⃣ Elevação Lateral (halter)", s:"3×12", w:"👉 3–4kg", t:"Sobe até linha do ombro, sem balançar.", v:"https://www.youtube.com/results?search_query=eleva%C3%A7%C3%A3o+lateral+halter+como+fazer"},
      {n:"4️⃣ Desenvolvimento (halter)", s:"3×10", w:"👉 5–6kg", t:"Controle. Não jogar a lombar.", v:"https://www.youtube.com/results?search_query=desenvolvimento+ombro+halter+como+fazer"},
      {n:"⏳ Vácuo abdominal", s:"3×20s", w:"👉 cintura marcada", t:"Solta o ar e puxa o umbigo pra dentro (sem prender respiração por muito tempo).", v:"https://www.youtube.com/results?search_query=vacuum+abdominal+como+fazer"}
    ]
  },
  qua: {
    titulo: "Quarta — Quadríceps + Glúteo 🔥",
    sub: "Foco: perna + glúteo com progressão de carga.",
    ex: [
      {n:"1️⃣ Leg Press", s:"4×12", w:"👉 80kg (meta 100–110kg)", t:"Pé um pouco mais alto. Não travar joelho. Desce controlando.", v:"https://www.youtube.com/results?search_query=leg+press+como+fazer+correto"},
      {n:"2️⃣ Agachamento no Smith", s:"3×10", w:"👉 10kg cada lado", t:"Pés levemente à frente. Desce controlado. Subida forte.", v:"https://www.youtube.com/results?search_query=agachamento+no+smith+como+fazer"},
      {n:"3️⃣ Cadeira Extensora", s:"3×12", w:"👉 20–25kg", t:"Sobe forte e desce controlando. Sem “chutar”.", v:"https://www.youtube.com/results?search_query=cadeira+extensora+como+fazer"},
      {n:"4️⃣ Abdutora", s:"3×15", w:"👉 30–35kg", t:"Foco no glúteo lateral (ajuda ampulheta).", v:"https://www.youtube.com/results?search_query=abdutora+m%C3%A1quina+como+usar"}
    ]
  },
  qui: {
    titulo: "Quinta — Costas + Postura + Core 🧍✨",
    sub: "Foco: costas para “afinar visualmente” a cintura + postura elegante.",
    ex: [
      {n:"1️⃣ Puxada Frente (polia)", s:"3×12", w:"👉 20–25kg", t:"Puxa com cotovelos. Ombros pra baixo.", v:"https://www.youtube.com/results?search_query=puxada+frente+na+polia+como+fazer"},
      {n:"2️⃣ Remada Baixa (máquina/polia)", s:"3×12", w:"👉 20–25kg", t:"Segura 1s atrás. Peito aberto. Postura firme.", v:"https://www.youtube.com/results?search_query=remada+baixa+na+polia+como+fazer"},
      {n:"3️⃣ Face Pull", s:"3×15", w:"👉 leve/médio", t:"Cotovelos altos. Ajuda postura e “colinho” bonito.", v:"https://www.youtube.com/results?search_query=face+pull+como+fazer"},
      {n:"4️⃣ Prancha", s:"3×40s", w:"👉 core firme", t:"Barriga pra dentro. Sem cair lombar.", v:"https://www.youtube.com/results?search_query=prancha+abdominal+como+fazer"},
      {n:"⏳ Vácuo abdominal", s:"2×20s", w:"👉 cintura", t:"Consistência = cintura mais desenhada.", v:"https://www.youtube.com/results?search_query=vacuum+abdominal+como+fazer"}
    ]
  },
  sex: {
    titulo: "Sexta — Glúteo Foco (pesado) 🍑🚀",
    sub: "Foco: Hip Thrust pesado + acessórios para glúteo crescer.",
    ex: [
      {n:"1️⃣ Elevação pélvica (Hip Thrust pesado)", s:"4×8–10", w:"👉 30kg (meta 45kg)", t:"Forma perfeita. Pausa 1s no topo.", v:"https://www.youtube.com/results?search_query=hip+thrust+como+fazer"},
      {n:"2️⃣ Stiff", s:"3×12", w:"👉 8kg cada lado", t:"Controle, coluna neutra. Desce devagar.", v:"https://www.youtube.com/results?search_query=stiff+com+halter+como+fazer"},
      {n:"3️⃣ Afundo andando", s:"3×10 cada perna", w:"👉 4–6kg", t:"Tronco levemente à frente. Calcanhar empurra.", v:"https://www.youtube.com/results?search_query=afundo+andando+como+fazer"},
      {n:"4️⃣ Abdutora", s:"4×15", w:"👉 35–40kg", t:"Segura 1s aberta. Glúteo lateral.", v:"https://www.youtube.com/results?search_query=abdutora+m%C3%A1quina+como+usar"},
      {n:"⏳ Vácuo abdominal", s:"3×20s", w:"👉 cintura", t:"3x/semana já dá diferença.", v:"https://www.youtube.com/results?search_query=vacuum+abdominal+como+fazer"}
    ]
  }
};

const dayOrder = [
  {k:"seg", label:"Seg", icon:"🍑"},
  {k:"ter", label:"Ter", icon:"💗"},
  {k:"qua", label:"Qua", icon:"🔥"},
  {k:"qui", label:"Qui", icon:"🧍"},
  {k:"sex", label:"Sex", icon:"🚀"},
];

let diaAtual = "seg";

/* ========= NAV ========= */
document.querySelectorAll(".navBtn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".navBtn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const id = btn.getAttribute("data-go");
    document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
    document.getElementById(id).classList.add("active");

    // também manter Treino e Água visíveis na coluna dependendo da tela
    // (na prática, só alterna os cards da direita)
  });
});

function construirBotoesDias(){
  const box = document.getElementById("dayBtns");
  box.innerHTML = "";
  dayOrder.forEach(d=>{
    const t = treino[d.k].titulo.replace(/^.*—\s/,"");
    const s = treino[d.k].sub;
    const el = document.createElement("div");
    el.className = "dayBtn" + (d.k===diaAtual ? " active":"");
    el.innerHTML = `<div class="t">${d.icon} ${d.label}</div><div class="s">${t}</div>`;
    el.onclick = ()=>{ selecionarDia(d.k); };
    box.appendChild(el);
  });
}

function selecionarDia(k){
  diaAtual = k;
  construirBotoesDias();
  renderDia();
}

function renderDia(){
  const d = treino[diaAtual];
  document.getElementById("dayTitle").innerText = d.titulo;
  document.getElementById("daySub").innerText = d.sub;

  const list = document.getElementById("exList");
  list.innerHTML = "";

  const doneMap = (dados.treinosFeitos[hoje()] && dados.treinosFeitos[hoje()].checks) ? dados.treinosFeitos[hoje()].checks : {};
  const keyPrefix = `${diaAtual}_`;

  d.ex.forEach((ex, idx)=>{
    const exKey = keyPrefix + idx;
    const wrap = document.createElement("div");
    wrap.className = "ex";
    wrap.innerHTML = `
      <input type="checkbox" ${doneMap[exKey] ? "checked":""} />
      <div style="flex:1;">
        <h4>${ex.n} — <span style="color:var(--pink)">${ex.s}</span></h4>
        <div class="meta">${ex.w}<br>💡 ${ex.t}</div>
        <a href="${ex.v}" target="_blank" rel="noopener">▶️ Ver vídeo (PT)</a>
      </div>
    `;
    const cb = wrap.querySelector("input");
    cb.addEventListener("change", ()=>{
      if(!dados.treinosFeitos[hoje()]) dados.treinosFeitos[hoje()] = {};
      if(!dados.treinosFeitos[hoje()].checks) dados.treinosFeitos[hoje()].checks = {};
      dados.treinosFeitos[hoje()].checks[exKey] = cb.checked;
      salvarAll();
      atualizarStatusTreino();
      recalcularMetas();
    });
    list.appendChild(wrap);
  });

  atualizarStatusTreino();
}

function marcarTreinoFeito(){
  if(!dados.treinosFeitos[hoje()]) dados.treinosFeitos[hoje()] = {};
  if(!dados.treinosFeitos[hoje()].feito) dados.treinosFeitos[hoje()].feito = {};
  dados.treinosFeitos[hoje()].feito[diaAtual] = true;
  salvarAll();
  atualizarStatusTreino();
  recalcularMetas();
}

function desmarcarTreinoFeito(){
  if(dados.treinosFeitos[hoje()] && dados.treinosFeitos[hoje()].feito){
    dados.treinosFeitos[hoje()].feito[diaAtual] = false;
    salvarAll();
    atualizarStatusTreino();
    recalcularMetas();
  }
}

function atualizarStatusTreino(){
  const obj = dados.treinosFeitos[hoje()] && dados.treinosFeitos[hoje()].feito ? dados.treinosFeitos[hoje()].feito : {};
  const feito = !!obj[diaAtual];
  const done = feito ? "✅ Treino do dia marcado como feito!" : "⏳ Treino do dia ainda não marcado como feito.";
  document.getElementById("treinoStatus").innerHTML = feito ? `<span class="ok">${done}</span>` : `<span class="warn">${done}</span>`;
}

/* ========= ÁGUA ========= */
if(!dados.agua[hoje()]) dados.agua[hoje()] = {total:0, pilha:[]};

function atualizarAgua(){
  const meta = Number(document.getElementById("metaAgua").value || 0);
  const total = (dados.agua[hoje()]?.total) || 0;

  document.getElementById("statusAgua").innerHTML = `💧 Hoje: <b>${total} ml</b> • Meta: <b>${meta} ml</b>`;
  let pct = meta>0 ? (total/meta)*100 : 0;
  pct = clamp(pct, 0, 100);
  document.getElementById("barAgua").style.width = pct + "%";

  // média 7 dias
  let soma = 0, dias = 0;
  for(let i=0;i<7;i++){
    const d = new Date();
    d.setDate(d.getDate()-i);
    const key = d.toISOString().split("T")[0];
    if(dados.agua[key]){
      soma += dados.agua[key].total || 0;
      dias++;
    }
  }
  const media = dias ? Math.round(soma/dias) : 0;
  document.getElementById("media7").innerHTML = `📊 Média últimos 7 dias: <b>${media} ml</b>`;

  salvarAll();
  recalcularMetas();
}
document.getElementById("metaAgua").addEventListener("input", atualizarAgua);

function addAgua(valor){
  if(!dados.agua[hoje()]) dados.agua[hoje()] = {total:0, pilha:[]};
  dados.agua[hoje()].total += valor;
  dados.agua[hoje()].pilha.push(valor);
  salvarAll();
  atualizarAgua();
}
function addManual(){
  const val = Number(document.getElementById("aguaManual").value);
  if(val > 0){
    addAgua(val);
    document.getElementById("aguaManual").value = "";
  }
}
function desfazerAgua(){
  const stack = dados.agua[hoje()]?.pilha || [];
  const ultimo = stack.pop();
  if(ultimo){
    dados.agua[hoje()].total -= ultimo;
    if(dados.agua[hoje()].total < 0) dados.agua[hoje()].total = 0;
  }
  salvarAll();
  atualizarAgua();
}
function zerarAgua(){
  dados.agua[hoje()] = {total:0, pilha:[]};
  salvarAll();
  atualizarAgua();
}

/* ========= INTESTINO ========= */
function salvarIntestino(){
  dados.intestino[hoje()] = {
    foi: document.getElementById("intestinoSel").value,
    chia: document.getElementById("chiaCheck").checked
  };
  salvarAll();
  atualizarIntestino();
}
function limparIntestinoHoje(){
  delete dados.intestino[hoje()];
  salvarAll();
  atualizarIntestino();
}
function atualizarIntestino(){
  // últimos 10 registros (mais recente primeiro)
  const entries = Object.entries(dados.intestino).sort((a,b)=> b[0].localeCompare(a[0])).slice(0,10);
  const html = entries.map(([data,val])=>{
    const foiTxt = val.foi === "sim" ? "✅ Sim" : (val.foi==="pouco" ? "🟡 Pouquinho" : "❌ Não");
    const chiaTxt = val.chia ? " + 🌿 chia" : "";
    return `<b>${fmtDataBR(data)}</b> — ${foiTxt}${chiaTxt}`;
  }).join("<br>");
  document.getElementById("historicoIntestino").innerHTML = html || "Sem registros ainda.";

  // preencher hoje se tiver
  if(dados.intestino[hoje()]){
    document.getElementById("intestinoSel").value = dados.intestino[hoje()].foi;
    document.getElementById("chiaCheck").checked = !!dados.intestino[hoje()].chia;
  } else {
    document.getElementById("intestinoSel").value = "nao";
    document.getElementById("chiaCheck").checked = false;
  }
}

/* ========= MEDIDAS + AMPULHETA + GRÁFICO ========= */
let chart;

function calcAmpulheta(gluteo, cintura){
  if(!gluteo || !cintura) return null;
  const ratio = gluteo / cintura;
  let nota = "";
  if(ratio >= 1.25) nota = "🔥 Ampulheta Forte";
  else if(ratio >= 1.15) nota = "✨ Boa Proporção";
  else nota = "🛠️ Em Construção";
  return {ratio: Number(ratio.toFixed(2)), nota};
}

function salvarMedidas(){
  const peso = Number(document.getElementById("peso").value);
  const cintura = Number(document.getElementById("cintura").value);
  const abdomen = Number(document.getElementById("abdomen").value);
  const gluteo = Number(document.getElementById("gluteo").value);

  const amp = calcAmpulheta(gluteo, cintura);

  dados.medidas.push({
    data: hoje(),
    peso: isNaN(peso)? "": peso,
    cintura: isNaN(cintura)? "": cintura,
    abdomen: isNaN(abdomen)? "": abdomen,
    gluteo: isNaN(gluteo)? "": gluteo,
    ratio: amp ? amp.ratio : ""
  });

  salvarAll();
  atualizarMedidas();
  recalcularMetas();
}

function limparCamposMedidas(){
  document.getElementById("peso").value = "";
  document.getElementById("cintura").value = "";
  document.getElementById("abdomen").value = "";
  document.getElementById("gluteo").value = "";
}

function atualizarMedidas(){
  const box = document.getElementById("ultimaMedida");
  const scoreBox = document.getElementById("scoreBox");

  if(!dados.medidas.length){
    box.innerHTML = "Sem medidas ainda.";
    scoreBox.innerHTML = "";
    renderChart();
    return;
  }

  const ult = dados.medidas[dados.medidas.length-1];
  box.innerHTML = `
    <b>Última medida:</b> ${fmtDataBR(ult.data)}<br>
    ⚖️ Peso: <b>${ult.peso || "-"}</b> kg •
    ⏳ Cintura: <b>${ult.cintura || "-"}</b> cm •
    🫶 Abdômen: <b>${ult.abdomen || "-"}</b> cm •
    🍑 Glúteo: <b>${ult.gluteo || "-"}</b> cm
  `;

  const amp = calcAmpulheta(Number(ult.gluteo), Number(ult.cintura));
  if(amp){
    scoreBox.innerHTML = `
      <span class="badge">🍑 ÷ ⏳ = <b>${amp.ratio}</b></span>
      <span class="badge">${amp.nota}</span>
    `;
  } else {
    scoreBox.innerHTML = `<span class="badge">Preencha cintura e glúteo para calcular ampulheta</span>`;
  }

  renderChart();
}

function renderChart(){
  const ctx = document.getElementById("chartGluteo").getContext("2d");

  const items = dados.medidas
    .filter(m => m.gluteo !== "" && !isNaN(Number(m.gluteo)))
    .slice(-12);

  const labels = items.map(m => fmtDataBR(m.data));
  const values = items.map(m => Number(m.gluteo));

  if(chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Glúteo (cm)",
        data: values,
        tension: 0.35,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true }
      },
      scales: {
        y: { beginAtZero: false }
      }
    }
  });
}

/* ========= PROTEÍNA ========= */
document.getElementById("dataProt").value = fmtDataBR(hoje());

function protTotalFromInputs(){
  const frango = Number(document.getElementById("pFrango").value||0);
  const carne  = Number(document.getElementById("pCarne").value||0);
  const queijo = Number(document.getElementById("pQueijo").value||0);
  const ovo    = Number(document.getElementById("pOvo").value||0);
  const iog    = Number(document.getElementById("pIogurte").value||0);
  const whey   = Number(document.getElementById("pWhey").value||0);

  const total =
    (frango * 0.31) +
    (carne  * 0.26) +
    (queijo * 0.25) +
    (ovo    * 6) +
    (iog    * 10) +
    (whey   * 20);

  return {
    frango, carne, queijo, ovo, iog, whey,
    total: Math.round(total)
  };
}

function salvarProteina(){
  const meta = Number(document.getElementById("metaProt").value || 0);
  const p = protTotalFromInputs();

  dados.proteina[hoje()] = {
    meta,
    ...p
  };

  salvarAll();
  atualizarProteina();
  recalcularMetas();
}

function limparProteina(){
  ["pFrango","pCarne","pQueijo","pOvo","pIogurte","pWhey"].forEach(id=>document.getElementById(id).value="");
}

function atualizarProteina(){
  const meta = Number(document.getElementById("metaProt").value || 0);
  const reg = dados.proteina[hoje()];

  let total = 0;
  if(reg){
    total = reg.total || 0;
    document.getElementById("metaProt").value = reg.meta || meta;
    document.getElementById("pFrango").value = reg.frango || "";
    document.getElementById("pCarne").value = reg.carne || "";
    document.getElementById("pQueijo").value = reg.queijo || "";
    document.getElementById("pOvo").value = reg.ovo || "";
    document.getElementById("pIogurte").value = reg.iog || "";
    document.getElementById("pWhey").value = reg.whey || "";
  }

  const metaFinal = Number(document.getElementById("metaProt").value || 0);
  const pct = metaFinal > 0 ? clamp((total/metaFinal)*100, 0, 100) : 0;
  document.getElementById("barProt").style.width = pct + "%";

  const falta = metaFinal - total;
  document.getElementById("statusProt").innerHTML =
    `🍽️ Hoje: <b>${total} g</b> • Meta: <b>${metaFinal} g</b> • ${falta>0 ? "Faltam <b>"+falta+" g</b>" : "<b>Meta batida! 🔥</b>"}`;

  // histórico 7 dias
  const entries = Object.entries(dados.proteina).sort((a,b)=> b[0].localeCompare(a[0])).slice(0,7);
  const html = entries.map(([data,val])=>{
    const ok = (val.total||0) >= (val.meta||0) && (val.meta||0) > 0;
    return `${ok ? "✅" : "⏳"} <b>${fmtDataBR(data)}</b> — ${val.total||0}g (meta ${val.meta||0}g)`;
  }).join("<br>");
  document.getElementById("histProt").innerHTML = html || "Sem histórico ainda.";
}

/* ========= FOTOS ========= */
// compressão simples para não “pesar”
function compressImageToDataURL(file, maxW=900, quality=0.78){
  return new Promise((resolve, reject)=>{
    const img = new Image();
    const reader = new FileReader();
    reader.onload = e => { img.src = e.target.result; };
    reader.onerror = reject;
    img.onload = ()=>{
      const scale = Math.min(1, maxW / img.width);
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      const dataUrl = canvas.toDataURL("image/jpeg", quality);
      resolve(dataUrl);
    };
    img.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function salvarFoto(){
  const file = document.getElementById("fotoFile").files[0];
  if(!file){
    alert("Escolha uma foto primeiro 🙂");
    return;
  }
  const tipo = document.getElementById("fotoTipo").value;
  const legenda = document.getElementById("fotoLegenda").value || "";

  compressImageToDataURL(file).then(dataUrl=>{
    const id = "ph_" + Date.now();
    dados.fotos.unshift({
      id,
      date: hoje(),
      tipo,
      legenda,
      dataUrl
    });
    // limitar para não estourar memória (ex: 12 fotos)
    if(dados.fotos.length > 12) dados.fotos = dados.fotos.slice(0,12);

    salvarAll();
    document.getElementById("fotoFile").value = "";
    document.getElementById("fotoLegenda").value = "";
    renderFotos();
  }).catch(()=>{
    alert("Não consegui salvar essa foto. Tente uma foto menor 🙂");
  });
}

function limparFotos(){
  if(confirm("Tem certeza que quer apagar TODAS as fotos salvas no app?")){
    dados.fotos = [];
    salvarAll();
    renderFotos();
  }
}

function apagarFoto(id){
  dados.fotos = dados.fotos.filter(f=>f.id!==id);
  salvarAll();
  renderFotos();
}

function renderFotos(){
  const grid = document.getElementById("photosGrid");
  grid.innerHTML = "";
  if(!dados.fotos.length){
    grid.innerHTML = `<div class="small">Sem fotos ainda. (Sugestão: foto a cada 30 dias)</div>`;
    return;
  }
  dados.fotos.forEach(f=>{
    const el = document.createElement("div");
    el.className = "photoCard";
    el.innerHTML = `
      <img src="${f.dataUrl}" alt="foto" />
      <div class="p">
        <b>${f.tipo.toUpperCase()}</b> • ${fmtDataBR(f.date)}<br>
        ${f.legenda ? f.legenda+"<br>" : ""}
        <a href="#" onclick="apagarFoto('${f.id}');return false;" style="color:var(--pink);font-weight:900;text-decoration:none;">🗑️ apagar</a>
      </div>
    `;
    grid.appendChild(el);
  });
}

/* ========= METAS SEMANAIS ========= */
function contarSemanaDias(keysObj, fieldFn){
  // pega dias da semana atual (Seg->Dom) e conta condition
  const wk = getWeekKey(new Date());
  // monday ISO
  const mondayIso = wk.replace("week_","");
  const monday = new Date(mondayIso+"T00:00:00");
  let count = 0;
  for(let i=0;i<7;i++){
    const d = new Date(monday);
    d.setDate(d.getDate()+i);
    const key = d.toISOString().split("T")[0];
    if(fieldFn(key)) count++;
  }
  return count;
}

function recalcularMetas(){
  const metaAgua = Number(document.getElementById("metaAgua").value||0);
  const treinosSemana = contarSemanaDias(dados.treinosFeitos, (dateKey)=>{
    const f = dados.treinosFeitos[dateKey]?.feito || {};
    // conta qualquer dia marcado true
    return Object.values(f).some(v=>v===true);
  });

  const aguaSemana = contarSemanaDias(dados.agua, (dateKey)=>{
    const t = dados.agua[dateKey]?.total || 0;
    return metaAgua>0 && t >= metaAgua;
  });

  const protSemana = contarSemanaDias(dados.proteina, (dateKey)=>{
    const reg = dados.proteina[dateKey];
    if(!reg) return false;
    const meta = reg.meta || 0;
    return meta>0 && (reg.total||0) >= meta;
  });

  const html = `
    <b>📅 Semana atual:</b> ${getWeekKey(new Date()).replace("week_","(início: ")} )<br><br>
    🏋️ Treinos feitos: <b>${treinosSemana}</b> / 5<br>
    💧 Água (bateu meta): <b>${aguaSemana}</b> / 5<br>
    🍽️ Proteína (bateu meta): <b>${protSemana}</b> / 5<br><br>
    <b>Meta mínima pra evolução:</b> 4 treinos + 5 dias batendo água + 5 dias batendo proteína.
  `.replace("(início: ", "(início: "+fmtDataBR(getWeekKey(new Date()).replace("week_","")));

  document.getElementById("metasResumo").innerHTML = html;
  salvarAll();
}

function resetSemana(){
  if(confirm("Resetar semana? Isso não apaga histórico, mas zera a contagem de treinos marcados como feito na semana (se você quiser recomeçar).")){
    // simplesmente não dá para "resetar semana" sem mexer nos dias.
    // vamos desmarcar 'feito' dos dias da semana atual
    const wk = getWeekKey(new Date());
    const mondayIso = wk.replace("week_","");
    const monday = new Date(mondayIso+"T00:00:00");
    for(let i=0;i<7;i++){
      const d = new Date(monday);
      d.setDate(d.getDate()+i);
      const key = d.toISOString().split("T")[0];
      if(dados.treinosFeitos[key]?.feito){
        dados.treinosFeitos[key].feito = {};
      }
    }
    salvarAll();
    atualizarStatusTreino();
    recalcularMetas();
    alert("Semana resetada ✅");
  }
}

/* ========= INIT ========= */
function init(){
  construirBotoesDias();
  renderDia();
  atualizarAgua();
  atualizarIntestino();
  atualizarMedidas();
  atualizarProteina();
  renderFotos();
  recalcularMetas();
}
init();
</script>

</body>
</html>
