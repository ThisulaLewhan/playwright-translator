import { test, expect } from "@playwright/test";

test.describe("Singlish to Sinhala Translator – Automated Tests", () => {
  const CONFIG = {
    url: "https://www.swifttranslator.com/",
    timeouts: {
      pageLoad: 10000,
      afterClear: 1000,
      translation: 30000,
      betweenTests: 2000,
    },
    selectors: {
      inputField: "textarea",
      outputContainer: "div.whitespace-pre-wrap",
    },
  };

  const testCases = [
    // Positive Functional
    {
      id: "Pos_Fun_0001",
      description: "Need expression",
      input: "mata thee oonee.",
      expected: "මට තේ ඕනේ",
      type: "positive",
    },
    {
      id: "Pos_Fun_0002",
      description: "Compound sentence",
      input: "mama panthi yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.",
      expected: "මම පන්ති යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ",
      type: "positive",
    },
    {
      id: "Pos_Fun_0003",
      description: "Conditional sentence",
      input: "oya kanavanam mama balan innavaa.",
      expected: "ඔය කනවනම් මම බලන් ඉන්නවා",
      type: "positive",
    },
    {
      id: "Pos_Fun_0004",
      description: "Future question",
      input: "oyaa kavadhdha yanna hithan inne?",
      expected: "ඔයා කවද්ද යන්න හිතන් ඉන්නේ",
      type: "positive",
    },
    {
      id: "Pos_Fun_0005",
      description: "Imperative command",
      input: "vahaama yanna.",
      expected: "වහාම යන්න",
      type: "positive",
    },
    {
      id: "Pos_Fun_0006",
      description: "Instruction confirmation",
      input: "oyaa eeka hariyata karalaa.",
      expected: "ඔයා ඒක හරියට කරලා",
      type: "positive",
    },
    {
      id: "Pos_Fun_0007",
      description: "Negative statement",
      input: "mama ehema kiyanne naehae.",
      expected: "මම එහෙම කියන්නෙ නැහැ",
      type: "positive",
    },
    {
      id: "Pos_Fun_0008",
      description: "Formal greeting",
      input: "suBha sandhaevak!",
      expected: "සුභ සන්දැවක්",
      type: "positive",
    },
    {
      id: "Pos_Fun_0009",
      description: "Polite command",
      input: "karuNaakaralaa eka poddak dhenna.",
      expected: "කරුණාකරලා එක පොඩ්ඩක් දෙන්න",
      type: "positive",
    },
    {
      id: "Pos_Fun_0010",
      description: "Negative response",
      input: "naee, mata eeka genna puLuvan.",
      expected: "නෑ, මට ඒක ගෙන්න පුළුවන්",
      type: "positive",
    },
    {
      id: "Pos_Fun_0011",
      description: "Polite question",
      input: "karuNaakaralaa mata podi velaavak dhenna puLuvandha?",
      expected: "කරුණාකරලා මට පොඩි වෙලාවක් දෙන්න පුළුවන්ද",
      type: "positive",
    },
    {
      id: "Pos_Fun_0012",
      description: "Informal command",
      input: "ehema kiyapan.",
      expected: "එහෙම කියපන්",
      type: "positive",
    },
    {
      id: "Pos_Fun_0013",
      description: "Daily expression",
      input: "mata badaginiyi.",
      expected: "මට බඩගිනියි",
      type: "positive",
    },
    {
      id: "Pos_Fun_0014",
      description: "Phrase conversion",
      input: "poddak yanna",
      expected: "පොඩ්ඩක් යන්න",
      type: "positive",
    },
    {
      id: "Pos_Fun_0015",
      description: "Word spacing",
      input: "mata koththu kanna oonee.",
      expected: "මට කොත්තු කන්න ඕනේ",
      type: "positive",
    },
    {
      id: "Pos_Fun_0016",
      description: "Repeated words",
      input: "ov ov",
      expected: "ඔව් ඔව්",
      type: "positive",
    },
    {
      id: "Pos_Fun_0017",
      description: "Past tense",
      input: "api English panthi giyaa.",
      expected: "අපි English පන්ති ගියා",
      type: "positive",
    },
    {
      id: "Pos_Fun_0018",
      description: "Future plan",
      input: "api iiLaGa sathiyee gamanak yamu.",
      expected: "අපි ඊළඟ සතියේ ගමනක් යමු",
      type: "positive",
    },
    {
      id: "Pos_Fun_0019",
      description: "Polite request",
      input: "karuNaakara eeka evanavadha?",
      expected: "කරුණාකර ඒක එවනවද",
      type: "positive",
    },
    {
      id: "Pos_Fun_0020",
      description: "Mixed language",
      input: "Zoom meeting ekee link eka Email karanna puLuvandha.",
      expected: "Zoom meeting එකේ link එක Email කරන්න පුළුවන්ද",
      type: "positive",
    },
    {
      id: "Pos_Fun_0021",
      description: "Abbreviations",
      input: "ID, NIC, CVV, ATM",
      expected: "ID, NIC, CVV, ATM",
      type: "positive",
    },
    {
      id: "Pos_Fun_0022",
      description: "Date format",
      input: "janavaari 01",
      expected: "ජනවාරි 01",
      type: "positive",
    },
    {
      id: "Pos_Fun_0023",
      description: "Multi-line input",
      input: "mama office yanavaa. oyaa enavadha maath ekka yanna?",
      expected: "මම office යනවා. ඔයා එනවද මාත් එක්ක යන්න?",
      type: "positive",
    },
    {
      id: "Pos_Fun_0024",
      description: "Long paragraph",
      input: "lankaavee cricket kandayama iyee paevathi tharangayen visishta jayagrahanayak labaa gaeniimata samath viya...",
      expected: "ලන්කාවේ cricket කන්ඩයම ඉයේ පැවති",
      type: "positive",
    },
    {
      id: "Pos_Fun_0025",
      description: "Slang command",
      input: "adoo salli gaththanam eeka aayeth dhipanko bQQ",
      expected: "අඩෝ සල්ලි ගත්තනම් ඒක ආයෙත් දිපන්කො බං",
      type: "positive",
    },
    // Negative Functional
    {
      id: "Neg_Fun_0001",
      description: "Misspelling",
      input: "ikmanin suwa wenna",
      expected: "ඉක්මනින් සුව වෙන්න",
      type: "negative",
    },
    {
      id: "Neg_Fun_0002",
      description: "Extra punctuation",
      input: "hari lassanai!!!???",
      expected: "හරි ලස්සනයි",
      type: "negative",
    },
    {
      id: "Neg_Fun_0003",
      description: "Email input",
      input: "ntlewhan@gmail.com",
      expected: "ntlewhan@gmail.com",
      type: "negative",
    },
    {
      id: "Neg_Fun_0004",
      description: "Joined words",
      input: "hetaapiyanavaa",
      expected: "හෙට අපි යනවා",
      type: "negative",
    },
    {
      id: "Neg_Fun_0005",
      description: "Negation error",
      input: "swifttranslator eka hariyata vada karanne nae",
      expected: "swifttranslator එක හරිට වැඩ කරන්නේ නැහැ",
      type: "negative",
    },
    {
      id: "Neg_Fun_0006",
      description: "Repeated chars",
      input: "hariiiiiii lassanaiiiii",
      expected: "හරි ලස්සනයි",
      type: "negative",
    },
    {
      id: "Neg_Fun_0007",
      description: "Long mixed text",
      input: "system update eka passe usersla godak complaints dala thiyenavaa...",
      expected: "system update එක පස්සේ",
      type: "negative",
    },
    {
      id: "Neg_Fun_0008",
      description: "Negative command",
      input: "anawashya wada karanna epa",
      expected: "අනවශ්‍ය වැඩ කරන්න එපා",
      type: "negative",
    },
    {
      id: "Neg_Fun_0009",
      description: "Exaggerated slang",
      input: "adooo machn eeka supiriii",
      expected: "අඩෝ මචන් ඒක සුපිරි",
      type: "negative",
    },
    {
      id: "Neg_Fun_0010",
      description: "Missing spaces",
      input: "mamagedharayanneth nae adha mokadha vaessa hodhatama vahinavaa",
      expected: "මම ගෙදර යන්නෙත් නැ අද මොකද වැස්ස හොදටම වහිනවා",
      type: "negative",
    },
    // Positive UI
    {
      id: "Pos_UI_0001",
      description: "Real-time typing",
      input: "mata dhaen baya hithenavaa.",
      expected: "මට දැන් බය හිතෙනවා",
      type: "ui",
      useTyping: true,
    },
  ];

  test.beforeEach(async ({ page }) => {
    await page.goto(CONFIG.url);
  });

  for (const tc of testCases) {
    test(`${tc.id} – ${tc.description}`, async ({ page }) => {
      if (tc.useTyping) {
        await page
          .locator(CONFIG.selectors.inputField)
          .pressSequentially(tc.input, { delay: 100 });
      } else {
        await page.locator(CONFIG.selectors.inputField).fill(tc.input);
      }

      const outputDiv = page.locator(CONFIG.selectors.outputContainer).first();
      await expect(outputDiv).toContainText(tc.expected, {
        timeout: CONFIG.timeouts.translation,
      });
    });
  }
});
