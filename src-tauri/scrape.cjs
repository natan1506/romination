const puppeteer = require('puppeteer');

export async function scrapeConsoleGames(consoleName) {
  // Inicie o navegador
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Acesse a página inicial do Vimm's Lair
  await page.goto('https://vimm.net/vault/', { waitUntil: 'networkidle2' });
  
  // Pesquise o console
  await page.type('#search', consoleName);
  await page.keyboard.press('Enter');
  
  // Aguarde até a página carregar os resultados
  await page.waitForSelector('.vault_list', { visible: true });

  // Pegue todos os links de ROMs
  const romLinks = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('.vault_list a'));
    return links.map(link => ({
      title: link.textContent.trim(),
      url: link.href,
    }));
  });

  // Feche o navegador
  await browser.close();

  // Exiba os links capturados
  console.log(romLinks);
  return romLinks;
}

