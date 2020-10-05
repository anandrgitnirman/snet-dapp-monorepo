import DiscussionImage from "shared/dist/assets/images/Discussion.png";
import DocumentationImage from "shared/dist/assets/images/Documentation.png";
import TelegramImage from "shared/dist/assets/images/Telegram.png";

export const communityDetails = [
  {
    to: "https://community.singularitynet.io/",
    image: DiscussionImage,
    title: "Join the Discussion",
    description: "Get in touch with community experts and other users in the SingularityNET Staking Help forum.",
  },
  {
    to: "https://dev.singularitynet.io/products/staking/",
    image: DocumentationImage,
    title: "Full Staking Documentation",
    description:
      "Learn more about the stages of the staking process and what happens to your AGI tokens whilst they are staked.",
  },
  {
    to: "https://telegram.me/singularitynet",
    image: TelegramImage,
    title: "Telegram Community",
    description:
      "Did not find the answers you were looking for?  Reach out to us and we will response to your questions as soon as possible.",
  },
];

export const generalFAQ = [
  {
    question: "What browser and wallet combination is supported?",
    answer: `<p>The staking DApp works only with Metamask. Our recommended combinations are</p> 
      <ol>
      <li>Chrome with latest stable version of Metamask.</li>
      <li>Firefox with latest stable version of Metamask.</li>
      </ol>`,
  },
  {
    question: "What type of wallets can I use to stake on the Staking DApp?",
    answer: `<p>The staking DApp works only with Metamask. Please set up your ethereum account on Metamask to stake.</p>`,
  },
];

export const metamaskFAQ = [
  {
    question: "How can I use my hardware wallet to stake on the Staking DApp?",
    answer: `<p><span>The staking DApp works only with Metamask. Please set up your hardware wallet on Metamask using this  </span><a href="https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet" target="_new" rel="noopener noreferrer"><span>guide</span></a>.</p>`,
  },
  {
    question: "I am using Metamask but I am unable to connect on the portal",
    answer: `<p>Please check the version of your Metamask. The staking DApp works with the stable version of Metamask and not with beta versions.</p>`,
  },
  {
    question: "I connected my Ledger hardware wallet to Metamask but am still unable to connect or stake",
    answer: `<p>If you are using a hardware wallet from ledger connected to metamask, you need to have enabled contract data. Activate contract data in the settings of the app if you want to send ERC-20 tokens.</p>`,
  },
  {
    question: "When the Metamask window opens up it does not give me an option to confirm or submit the transaction",
    answer: `<ul>
    <li>At times Metamask windows does not pop-up and just shows a notification on the Metamask plugin icon on the browser tab. You have to open Metamask and confirm the transaction.</li>
    <li>Ensure that you have enough ETH in the account you are using.</li>
    </ul>`,
  },
  {
    question: "Metamask shows operation as pending for a long time. What should I do?",
    answer: `This occurs when the gas price provided for the transaction is very low
    <ul>
        <li>If a transaction is submitted with a low gas price, subsequent transactions will be stuck.</li>
        <li>If the original low cost transaction is submitted via metamask then you can resubmit by increasing gas price.</li>
        <li>Note that re-submitting the transaction multiple times will not fix this problem.</li>
    </ul>`,
  },
];

export const stakingFAQ = [
  {
    question: "How does partial withdrawals work?",
    answer: `<p>In order to withdraw your stake (staked amount along with the earned reward) you first need to opt out from auto renewal. 
    <br/><span>This option can be selected either at the point of staking or when the opt out window opens. Only opted out stakers will have an option to claim the stake. Note that this is no partial withdrawal as such.</span>
    <br/><span>For example if you have staked 100 AGI and have earned 10 AGI, when you opt out the entire 110 AGI is available for claim and <b>will not be carried into the next stake window</b>. So if you want to claim only 50 AGI and want the remaining 60 AGI to continue in the stake window you will have to stake the 60 AGI during the next stake window.</span>
    </p>`,
  },
  {
    question: "In the stake cycle when does the opt-out window open?",
    answer: `<p>In our current schedule the opt-out window (period when you can choose to withdraw your stake and the corresponding reward) opens during the last seven days of the current stake period. It coincides with the next stake window.</p>`,
  },
  {
    question: "When does the next stake window open?",
    answer: `<p>In our current schedule the next stake window (period when you can stake) opens during the last seven days of the stake period. Each stake period is for 30 days.</p>`,
  },
  {
    question: "When can I claim my rewards?",
    answer: `<p>In order to withdraw your stake (staked amount along with the earned reward) you first need to opt out from auto renewal. 
    <br/><span>This option can be selected either at the point of staking or when the opt out window opens. Only opted out stakers will have an option to claim the stake.</span>
    <br/><span>After you have opted out you can claim your complete stake and earned reward once the stake period is finished. You will see this option in the claims tab and claims will be enabled only after the stake period is finished</span></p>`,
  },
  {
    question: "I staked on the site, but I see the amount staked as 0, why?",
    answer: `
    Staking tokens is a two step process. 
    <ul>
    <li>Approve tokens - First metamask interaction</li>
    <li>Deposit tokens - Second metamask interaction</li>
    </ul>Ensure that you have performed both transactions.`,
  },
  {
    question: "I am unable to view my stake after I login. What should I do?",
    answer: `<p>Stakes are displayed based on the ethereum account used to stake.<br/>
    Ensure that you are logged in and metamask account is set to the ethereum address you used to stake tokens
    </p>`,
  },
];