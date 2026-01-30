import { test, expect } from "@playwright/test";

test.describe("Singlish to Sinhala Translator – Automated Tests", () => {
  const CONFIG = {
    url: 'https://www.swifttranslator.com/',
    timeouts: {
      pageLoad: 10000,
      afterClear: 1000,
      translation: 5000,
      betweenTests: 2000
    },
    selectors: {
      inputField: 'textarea',
      outputContainer: 'div.whitespace-pre-wrap'
    }
  };

  const testCases = [
    // Positive Functional
    {
      id: "Pos_Fun_0001",
      description: "Simple need expression sentence",
      input: "mata bath oonee.",
      expected: "මට බත් ඕනේ",
      type: "positive",
    },
    {
      id: "Pos_Fun_0002",
      description: "Compound sentence with contrast",
      input: "mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.",
      expected: "මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ",
      type: "positive",
    },
    {
      id: "Pos_Fun_0003",
      description: "Conditional complex sentence",
      input: "oya enavaanam mama balan innavaa.",
      expected: "ඔය එනවානම් මම බලන් ඉන්නවා",
      type: "positive",
    },
    {
      id: "Pos_Fun_0021",
      description: "Singular interrogative sentence",
      input: "oyaa enavadha?",
      expected: "ඔයා එනවද",
      type: "positive",
    },
    // Negative Functional
    {
      id: "Neg_Fun_0001",
      description: "Informal wish with spelling issues",
      input: "ikmanin suwa wenna",
      expected: "ඉක්මනින් සුව වෙන්න",
      type: "negative",
    },
    {
      id: "Neg_Fun_0006",
      description: "Excessive repeated characters",
      input: "hariiiiiii lassanaiiiii",
      expected: "හරි ලස්සනයි",
      type: "negative",
    },
    {
      id: "Neg_Fun_0003",
      description: "Email address input",
      input: "ntlewhan@gmail.com",
      expected: "ntlewhan@gmail.com",
      type: "negative",
    },
    // Positive UI
    {
      id: "Pos_UI_0001",
      description: "Real-time output update",
      input: "mata baya hithenavaa",
      expected: "මට බය හිතෙනවා",
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
        await page.locator(CONFIG.selectors.inputField).pressSequentially(tc.input, { delay: 100 });
      } else {
        await page.locator(CONFIG.selectors.inputField).fill(tc.input);
      }

      await page.waitForTimeout(CONFIG.timeouts.translation);

      const outputDiv = page.locator(CONFIG.selectors.outputContainer).first();
      const output = (await outputDiv.textContent()) || "";

      expect(output).toContain(tc.expected);
    });
  }
});
