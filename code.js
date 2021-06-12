
var playerTurn = 1;

var playerOnePoints = 0;
var playerTwoPoints = 0;
var playerThreePoints = 0;
var playerFourPoints = 0;



var penalties = 
["Do 5 pushups", "Pretend To Be The Person On Your Right For 10 Minutes."
,"Tell someone a secret.", "Talk in an accent for the next 2 rounds.", "Yell And Act Out The First Sentence That Comes To Your Mind."
, "Do A Handstand For One Minute.", "Try to Sell Someone the First Object to Behind You.", "Dance Like A Cowboy."
, "Entertain Everyone With Your Best Five Minute Comedy Act.", "Say the Alphabet Backwards", "Stand up and do jumping jacks until your next turn"
, "Act like a cat.", "Do the Macarena silently until it is your turn again.", "Attempt a cartwheel."];


var dict = 
{
    "May Swaminarayan Bhagwan": "May Swaminarayan Bhagwan, who is Akshar-Purushottam Maharaj, bestow ultimate peace, bliss and happiness on all.",
    "This body is": "a means for moksha, not merely a means for indulgence [in sense pleasures]. Rare and perishable, this body is not repeatedly attained.",
    "Personal and family": "activities are [only] for the sustenance of the body. They arenot the ultimate objective of this human birth.",
    "This body has" : "been received to eradicate all flaws, attain the brāhmic state and offer devotion to Bhagwan. All this is certainly attained by practising satsang.2 Therefore, mumukshus should always practise satsang. ",
    "For this reason," : "Parabrahman Swaminarayan himself manifested in this world and established this divine Satsang.",
    "The shastra titled" : "‘Satsang Diksha’ has been composed with the pure intent that mumukshus acquire the knowledge of this satsang.",
    "One should know" : " that the true meaning of satsang is to associate with the ātmā,  Satsang Diksha 7 which is true; to associate with Paramatma, who is true; to associate with the guru, who is true; and to associate with true shastras. One who practises this divine satsang becomes blissful.",
    "‘Diksha’ means firm" : "resolve, unwavering conviction coupled with faith, absolute  8 Satsang Diksha dedication, loving faith, observances and firm refuge.",
    "The methods of" : "āgnā and upāsanā revealed by Parabrahman Sahajanand Paramatma are clearly expressed in thisshastra",
    "All males and" : "females are entitled to satsang, all are entitled to happiness andall are entitled to brahmavidyā.",
    "In Satsang, superiority" : "or inferiority should never be understood to be based on gender. All can attain moksha through devotion while observing the dharma prescribed for them.",
    "All men and" : "women of all castes are forever entitled to satsang, brahmavidyā and moksha. Do not attribute notions of superiority and inferiority based on varna. All persons should shun their ego based on their caste and serve one another. No one  12 Satsang Diksha is superior and no one is inferior by birth. Therefore, one should not quarrel based on caste or class and should joyfully practise satsang.",
    "Householders and renunciants" : "are all entitled to moksha. Between them neither is inferior or superior, because house- Satsang Diksha 13 holders and renunciants are all devotees of Bhagwan.",
    "To offer singular," : "resolute and supreme devotion to Bhagwan Swaminarayan, one should receive the Ashray Diksha Mantra and affiliate with the Satsang.",
    "The Ashray Diksha" : "Mantra is as follows: Dhanyo’smi purna-kāmo’smi nishpāpo nirbhayah sukhi; Akshara-guru-yogena Swaminārāyan-āshrayat.",
    "For the moksha" : "of one’s ātmā, a mumukshu should lovingly take refuge of Sahajanand Shri Hari and the Aksharbrahman Gunatit guru.",
    "Upon taking the" : "refuge of satsang, one should always wear a double-stranded wooden kanthi around the neck and accept the niyams of satsang.",
    "In this world," : "brahmavidyā cannot be fully realized in life without the Brahmaswarup guru.",
    "Without the Aksharbrahman" : "guru, 6. ‘Brahmaswarup guru’ refers to the Aksharbrahman guru. 18 Satsang Diksha supreme, unwavering conviction (nishchay) in Paramatma cannot be attained and one’s ātmā also cannot acquire brahmabhāv.",
    "Without the Brahmaswarup" : " guru, perfect devotion also cannot be offered, ultimate bliss cannot be attained and the three  Satsang Diksha 19 types of misery also cannot be eradicated.",
    "Therefore, one should" : "always take the refuge of the manifest Aksharbrahman guru, who enables one to attain all objectives and experience Paramatma.",
    "All satsangis should" : "always renounce all harmful addictions, as addictions cause numerous illnesses and miseries.",
    "One should never" : "consume intoxicating substances, such as alcohol, bhang and tobacco. One should also refrain from smoking.",
    "All women and" : "men should never engage 22 Satsang Diksha in any form of gambling or adultery.",
    "Satsangis should never" : "eat meat, fish, eggs, onions, garlic or hing.",
    "One should consume" : "water, milk and other drinkable items [only] after they have been filtered. Food items and beverages that are forbidden should never be consumed.",
    "Satsangis should never" : "steal. Even for the  24 Satsang Diksha sake of dharma, one should never commit theft.",
    "One should never" : "take even objects such as flowers or fruits without the consent of their owners. Taking without consent is a subtle form of theft.",
    "One should never" : "kill humans, animals, birds and bugs or other insects and creatures. The Shrutis, Smrutis and other sacred texts clearly describe non-violence  26 Satsang Diksha as the highest dharma and violence as adharma.",
    "Even for a yagna," : "satsangis should never harm goats or any other innocent animals. ",
    "When yagnas are" : " held, they should only be conducted without harming any beings and according to the Sampraday’s principles.",
    "Satsangis should never" : "eat meat, even if it  28 Satsang Diksha is considered to be the remnant of a yagna or sanctified by the deities.",
    "One should never" : "strike another person. One should not swear, insult or commit other forms of subtle harm or injury.",
    "One should not" : "commit violence to attain wealth, power, prestige or [to fulfil one’s desire] for a man or woman or anything else. Also, one should not commit violence out of ego, jealousy or anger.",
    "Inflicting mental, verbal" : "or physical violence pains Swaminarayan Bhagwan, who resides within that person.",
    "Suicide is also" : "a form of violence. Therefore, never commit suicide by falling from heights, hanging oneself, consuming poison or any other means.",
    "No one should" : " kill oneself or others out of grief, shame, fear, anger or due to illness and other adversities, not even for the sake of dharma.",
    "A mumukshu should" : "never commit suicide even at a place of pilgrimage. One should never commit suicide at pilgrimage places even with the hope of attaining moksha or merits.",
    "Bhagwan is the" : "all-doer, compassionate and the protector of all; at all times, he alone is the resolver of all my adversities.",
    "Whatever Bhagwan does" : "is always beneficial. His wish alone is my prārabdh. He alone is my liberator.",
    "My hindrances, sins," : "flaws and bad qualities will certainly be destroyed. I will surely attain peace, supreme bliss and happiness.",
    "This is because" : "I have attained the manifest form of Akshar-Purushottam Maharaj. With his strength, I will surely overcome misery.",
    "With the strength" : "of such thoughts, a devotee who has taken refuge never loses courage and remains joyous due to the strength of Bhagwan.",
    "One should never" : " spit, urinate or defaecate in places prohibited by the shastras and society.",
    "One should observe" : "all forms of external and internal purity. Shri Hari8 loves purity and is pleased with those who are pure.",
    "Satsangis should always" : "wake up before sunrise. After bathing and other morning 8. ‘Shri Hari’ is another name for Bhagwan Swaminarayan. 38 Satsang Diksha routines, they should put on clean clothes.",
    "Thereafter, one should" : "sit on a clean āsan and perform personal daily puja facing east or north.",
    "While chanting the" : "e Swaminarayan mantra and remembering the guru, apply a Ushaped tilak made from chandan that has been sanctified by having been offered to Bhagwan and a kumkum chandlo to the  40 Satsang Diksha forehead. One should also apply a tilakchandlo of chandan to the chest and both arms.",
    "While remembering Bhagwan" : "and the guru, women should imprint only a kumkum chandlo to their foreheads. They should not apply a tilak.",
    "Thereafter, to gain" : "the privilege to perform puja, a devotee who has taken the refuge of satsang should meditate on their ātmā while contemplating upon the glory of Bhagwan. The sacred mantra ‘Aksharam-aham Purushottam-dāso’smi’9 should be recited with joy and devotion. One should identify one’s ātmā with Aksharbrahman and perform mānsi puja with a calm and focused mind.",
    "Only Bhagwan and" : "the Brahmaswarup guru can bestow moksha. Therefore, one should only meditate upon them and perform their mānsi puja.",
    "Thereafter, devoutly place" : "the pictorial murtis on a clean cloth in a way that one can easily do their darshan.",
    "In the centre," : "one should arrange the murtis of Akshar and Purushottam, that is, Gunatitanand Swami and the one who  Satsang Diksha 45 transcends him, [Shriji] Maharaj.",
    "One should then" : "place the murtis of each guru up to Pramukh Swami Maharaj and the murtis of the gurus whom one has personally served.",
    "Thereafter, one should" : "invite [Shriji] Maharaj and the gurus by reciting the Ahvan Mantra. One should bow with folded hands and with dāsbhāv.",
    "The Ahvan Mantra" : "is as follows: Uttishtha Sahajānanda Shri-Hare Purushottama; Satsang Diksha Gunātitā’kshara brahmannuttishtha krupayā guro. Āgamyatām hi pujārtham āgamyatām mad-ātmataha; Sānnidhyād darshanād divyāt saubhāgyam vardhate mama.",
    "Thereafter, with mahimā" : "and a steady mind, one should perform mālā while chanting the Swaminarayan mantra and having darshan of the murtis. Afterwards, while continuing to do darshan of the murtis, one should stand on one leg with arms raised  50 Satsang Diksha and perform tapni mālā.",
    "One should then" : " perform pradakshinās of the murtis while contemplating upon Akshar-Purushottam Maharaj, who is pervasive and the focus of all.",
    "Thereafter, with dāsbhāv," : "males should perform sāshtāng dandvat pranāms and females should sit and offer panchāng pranāms.",
    "One should perform" : "an additional dandvat Satsang Diksha pranām every day to seek forgiveness for hurting or harbouring ill-will towards another devotee.",
    "Then, to fulfil" : "one’s noble wishes, one should pray with divyabhāv and devotion while chanting the Swaminarayan mantra (dhun).",
    "After devoutly performing" : "puja in this way, one should re-install Akshar-Purushottam Maharaj within one’s ātmā by reciting the Punaragaman Mantra.",
    "The Punaragaman Mantra" : "is as follows: Bhaktyaiva divya-bhāvena pujā te sam-anushthitā, Gachchhā’tha tvam mad-ātmānam Akshara-Purushottama",
    "To strengthen one’s" : "satsang, one should then daily read shastras that encompass the teachings and instructions of Shri Hari and the gurus.",
    "Thereafter, one should" : "bow to devotees with reverence and humility. Only after performing puja in this way should one engage in one’s daily activities.",
    "One should not" : "eat food or even drink water or other liquids without performing puja. One should not give up one’s puja even during outings.",
    "If one is" : " incapable of doing puja because of old age, illness or other difficulties, one should have one’s puja performed by another.",
    "Every satsangi in" : "a household should keep their own separate puja. Moreover, one should acquire a puja for a child on the same day that he or she is born.",
    "All satsangis should" : "place a beautiful mandir within their homes where they can daily offer devotion, pray and practise satsang. Within the mandir, one should devoutly and ceremonially consecrate the murtis of Akshar-Purushottam and the Gunatit gurus of the tradition.",
    "Every morning and," : "all satsangis should perform the ārti and sing the stuti before the ghar mandir.",
    "While performing the" : "ārti, one should devoutly sing aloud the ārti ‘Jay Swaminarayan, Jay Akshar-Purushottam…’ with a steady mind and while clapping.",
    "Offer whatever food" : "has been prepared [to the murtis] in the ghar mandir and after devoutly reciting prayers, eat the sanctified meal.",
    "One should not" : "consume foods, fruits, water and other items without first offering them to Bhagwan. Foods and other items that may be impure should not be offered to Bhagwan nor should they be eaten.",
    "While sitting in" : "front of the ghar mandir, one should, with devout feelings and concentration, sing kirtans, chant and engage in smruti or other acts of devotion according to one’s preferences.",
    "Family members should" : "gather daily for ghar sabhā and engage in bhajan, discussions, scriptural reading and other devotional activities.",
    "Shri Hari inspired" : "the creation of mandirs as a form of devotion to foster and protect pure upāsanā and bhakti. He instructed that, along with Bhagwan, one should also serve his supreme devotee, Aksharbrahman, in the very same manner that one serves Bhagwan.",
    "Aksharbrahman is Bhagwan’s" : "supreme devotee because he eternally transcends māyā and is forever engrossed in Bhagwan’s service.",
    "To fulfil this" : " ordinance and to grant moksha to all, divine mandirs are devoutly constructed and the murti of Aksharbrahman is also ceremoniously consecrated with Purushottam Bhagwan in the central shrines [of these mandirs].",
    "Similarly, Aksharbrahman and" : "Purushottam Bhagwan are also always consecrated in the central shrines of mandirs in homes and other places.",
    "Daily, in the" : "morning, evening or at another convenient time, all satsangis should devoutly go to a nearby mandir for darshan.",
    "To strengthen one’s" : "satsang, one should attend the weekly assemblies held at a nearby mandir or centre.",
    "Swaminarayan Bhagwan, the" : "sovereign of Akshar, is the manifest form of Paramatma Parabrahman Purushottam Hari.",
    "He alone is" : "s forever our ishtadev worthy of supreme upāsanā. One should always offer singular devotion to him only.",
    "Gunatitanand Swami is" : "the manifest form of the eternal Aksharbrahman. This Aksharbrahman paramparā is manifest even today.",
    "In the Sampraday’s" : "tradition of gurus that began with Gunatitanand Swami, only the present form of Aksharbrahman is our guru.",
    "Our ishtadev is" : "the same, our guru is the same and our siddhānt is also the same – thus, we are always united.",
    "One should know" : " [and realize] the divine Akshar-Purushottam siddhānt, which is Vedic, eternal and the form of brahmavidyā.",
    "Mumukshus should realize" : "that the five entities – jiva, ishwar, māyā, Aksharbrahman and Parabrahman – are forever distinct, eternal and true. Swaminarayan Bhagwan  himself established this clear siddhānt.",
    "Among these entities," : "Akshar and Purushottam are the two who are eternally beyond māyā. Jivas and ishwars attain moksha by associating with them.",
    "Paramatma Parabrahman is" : "forever superior to Aksharbrahman. Furthermore, even Aksharbrahman eternally serves Paramatma with dāsbhāv.",
    "Bhagwan is eternally" : "the all-doer, with form, and supreme; he always remains manifest for the moksha of mumukshus.",
    "Through the Aksharbrahman" : "guru, Bhagwan always remains present with all of his divinity and bestows utmost bliss.",
    "One should foster" : "intense love and ātmabuddhi for the Aksharbrahman guru. Believing the guru as the manifest form of Bhagwan, one should serve him and meditate upon him with devotion.",
    "The ‘Swaminarayan’ mantra" : "is divine, beyond this world and auspicious. Shri Hari himself bestowed this mantra. All devotees should chant it. In this mantra, understand that ‘Swami’ refers to  Satsang Diksha 81 Aksharbrahman, and ‘Narayan’ refers to Purushottam, who is superior to Aksharbrahman.",
    "Bhagwan Swaminarayan revealed" : "this siddhānt in this world. The Gunatit gurus spread it throughout the world. Shastriji Maharaj enshrined it in the form of murtis. It was reaffirmed in the jivancharitra texts of the gurus. This siddhānt was securely established by guruhari Pramukh Swami Maharaj in his own handwriting. This siddhānt may be imbibed in one’s life through the association of the manifest guruhari. It is this eternal and moksha-bestowing siddhānt that is known as the divine ‘Akshar-Purushottam Darshan’",
    "While reflecting on" : "such a supremely divine siddhānt, one should engage in satsang with conviction, joy and enthusiasm.",
    "Identify one’s ātmā," : "which is distinct from  the three bodies, as brahmarup and always offer upāsanā to Parabrahman.",
    "One should offer" : "devotion to Paramatma, the sovereign of Akshar, while always upholding dharma. One should never perform bhakti without dharma.",
    "One should not" : "behave immorally even under the pretext of devotion, wisdom or festivals.",
    "Even during festivities," : "one should abstain from bhang, alcohol and other such sub- Satsang Diksha 87 stances, as well as gambling, swearing and other such activities.",
    "Vairāgya is to" : "not have love for anything or anyone other than Parabrahman and Aksharbrahman. It serves to support bhakti.",
    "When faced with" : "criticism, shame, fear or difficulty, one should never abandon satsang, Swaminarayan Bhagwan, devotion towards him, or the guru.",
    "One should serve" : "Bhagwan and his devotees with pure intentions, believing it to be one’s great fortune and with the goal of attaining one’s moksha.",
    "One should not" : "let time pass wastefully without satsang or devotion. One should always give up laziness and negligence",
    "One should perform" : "tasks while engaging in devotion and according to āgnā. By doing so, one will not become attached to one’s actions, be burdened by them or develop ego because of them.",
    "One should fruitfully" : "use time by performing sevā, listening to discourses, smruti, meditating, studying, singing kirtans of Bhagwan and engaging in other such activities.",
    "One should take" : "the refuge of satsang to rid oneself of flaws, acquire virtues and attain ultimate moksha",
    "One should forever" : "take the refuge of satsang to attain the pleasure of Swaminarayan Bhagwan and the Gunatit gurus.",
    "O! We have" : "attained both Akshar and Purushottam here [in this life]. With the joy of having attained them, one should always relish the bliss of satsang.",
    "One should never" : "perform sevā, devotion, discourses, meditation, austerities, pilgrimages and other endeavours out of vanity, pretence, jealousy, competition, enmity or for the attainment of worldly fruits. However, they should be performed with faith, pure intentions and the wish to please Bhagwan.",
    "One should not" : "perceive human traits in Bhagwan or the guru, since both Akshar and Purushottam are beyond māyā and divine.",
    "One should develop" : "firm faith in Bhagwan and the guru, renounce feebleness, have patience and derive strength from Bhagwan.",
    "One should listen" : "to, recite, read, reflect upon and repeatedly recall the incidents of Swaminarayan Bhagwan.",
    "Mumukshus should always" : "associate with the manifest Aksharbrahman guru with supreme love and divyabhāv.",
    "Intense affection for" : "the Aksharbrahman guru is the only means to attaining the brāhmic state and realizing Bhagwan.",
    "To imbibe the" : "virtues of the Aksharbrahman guru and to experience Parabrahman, one should always reflect on the incidents of the Aksharbrahman guru.",
    "One should associate" : "with one’s guruhari through thought, word and deed and should realize him as ‘Narayanswarup’ – the manifest form of Narayan [Parabrahman].",
    "A satsangi should" : "never listen to or speak discouraging words. One should always speak encouraging words.",
    "With affection and" : "reverence, one should continuously speak of the glory of Brahman and Parabrahman and the greatness of those who are associated with them.",
    "Mumukshus should keep" : "suhradbhāv, divyabhāv and brahmabhāv toward satsangis.",
    "With discretion, one" : "should always keep  the paksh of Paramatma Parabrahman Swaminarayan Bhagwan, the Aksharbrahman Gunatit guru, the divine siddhānt they have imparted and the devotees who have sought their refuge.",
    "One should always" : "obey the commands of Bhagwan and the Brahmaswarup guru. One should realize their inner wishes and firmly abide by them. Their instructions should be followed without laziness, immediately, and always with joy, enthusiasm, mahimā and an eagerness to please them.",
    "With a composed" : "mind, one should introspect every day: “What have I come to accomplish in this world and what am I doing?”",
    "“Having attained oneness" : "with Akshar, I offer devotion to Purushottam.” In this manner, one should reflect on one’s goal each day without laziness.",
    "Swaminarayan Bhagwan is" : "the all-doer,14 supreme entity and controller. I have his association here in person. For this very reason, I am joyous, greatly fortunate, fulfilled, without doubts and worries, and forever blissful.",
    "In this way," : "with a composed mind, one should reflect daily on one’s divine attainment of Paramatma, his greatness and [attaining] his pleasure.",
    "Realizing one’s ātmā" : "to be distinct from the three qualities,17 one should every day believe oneself as being one with Aksharbrahman.",
    "Daily, one should" : "reflect on the impermanent nature of the world and on one’s ātmā as eternal and sachchidānand.",
    "One should understand" : "that all which has happened, which is happening, and which will happen is solely due to Swaminarayan Bhagwan’s will and only for my benefit",
    "One should daily" : "pray to Swaminarayan Bhagwan and the Brahmaswarup guru with faith and devotion",
    "When one experiences" : "impulses of egotism, jealousy, lust, anger, and other base instincts, one should calmly reflect: ‘I am akshar; I am a servant of Purushottam",
    "Also, one should" : "remain strong in the belief that Swaminarayan Bhagwan himself, who is the destroyer of all base instincts, is always with me.",
    "One should always" : "observe swadharma and renounce pardharma. Swadharma means to  observe the commands of Bhagwan and the guru. The wise mumukshu should realize that pardharma is disregarding their instructions and acting wilfully",
    "One should avoid" : "even [apparently] beneficial actions that impede devotion, trans- gress the niyams of satsang or cause one to lapse from dharma",
    "One should offer" : "appropriate respect to those who are senior in age, possess greater wisdom or are more virtuous by bowing reverently, using polite speech and expressing other forms of regard.",
    "One should always" : "respect the learned, seniors and teachers. According to one’s capacity, one should honour them with good words and other such deeds.",
    "One should address" : "each individual according to their virtues, achievements and other merits. One should encourage them in noble works according to their abilities.",
    "One should speak" : "words which are true, beneficial and loving. One should never falsely accuse any individual.",
    "One should never" : "utter unpleasant speech that is offensive, hurts its listener and is defamatory, harsh or hateful.",
    "One should never" : "speak untruth. One should express truth that is beneficial, but not utter even truth that may harm others.",
    "One should never" : "speak of another’s draw- backs or flaws. Doing so causes unrest and results in the displeasure of Bhagwan and the guru.",
    "If extremely necessary," : "it is acceptable to convey the truth with pure intent to an authorized person.",
    "One should never" : "act or think in a way that is hurtful or damaging to others or that increases conflict.",
    "With suhradaybhāv, recollect" : "the virtues of devotees. One should never view their  flaws or offend them in any way.",
    "In happy times" : "do not get carried away and in unhappy times do not become discouraged, since everything occurs by Swaminarayan Bhagwan’s wish.",
    "One should never" : "argue or quarrel with anyone. One should always be wellmannered and remain calm.",
    "One should never" : "be harsh in speech, action, thought or writing.",
    "Householder satsangis should" : "serve their mother and father. They should bow to their feet every day",
    "A wife should" : "serve her father-in-law as her own father and mother-in-law as her own mother. A father- and mother-in-law should care for their daughter-in-law as they would for their own daughter.",
    "Householders should diligently" : "nurture their sons and daughters through satsang, education and other activities. They should affectionately care for their other relatives according to their means.",
    "One should speak" : "pleasantly at home. One should renounce bitter speech and not harm others with malicious intent.",
    "Householders should joyously" : "eat meals together at home and provide hospitality to guests according to their means.",
    "In the event" : "of a death or other sad occasions, one should perform additional acts of devotion, sing kirtans, engage in discourses and remember AksharPurushottam Maharaj.",
    "One should always" : "impart sanskārs to one’s sons and daughters by teaching them  the divine principles of satsang, good conduct and virtues.",
    "From when a" : "child is in the womb, one should instil sanskārs and conviction in Akshar-Purushottam Maharaj by reading the sacred texts of satsang and through other [noble] acts.",
    "Men should never" : "look at women with a wrong intent. In the same manner, women should also never look at men with wrong intent.",
    "Except in emergency" : "situations, married men should never remain alone anywhere with women other than their wife.",
    "Similarly, [married] women" : "should never remain alone with men other than their husband, except in emergency situations",
    "A male should" : "not touch a female who is not closely related; however, he may respectfully touch one who is closely related. Similarly, a female should not touch a male who is not closely related; however, she may respectfully touch one who is closely related.",
    "In emergency situations," : "it is not a fault to touch others to protect or save them. However, if there is no emergency, then always obey the niyams.",
    "One should never" : "view dramas, films or other media that contain obscene scenes which destroy one’s dharma and sanskārs.",
    "Satsangis should not" : "associate with people who have addictions, are shameless or are adulterous.",
    "To protect one’s" : "dharma, female devotees should not associate with immoral women and should firmly abide by the niyams.",
    "One should not" : "listen to talks or songs, read books or view scenes that increase one’s lustful desires.",
    "Transactions of wealth," : "possessions, land and other assets should always be conducted in writing, in the presence of a  witness and by definitely following other such niyams.",
    "All devotees should" : "conduct their social dealings with even their relatives in writing and by following other such niyams.",
    "Satsangis should never" : " engage in dealings with immoral persons and should be compassionate towards those who are meek and disadvantaged.",
    "Worldly deeds should" : "never be performed  in haste without due deliberation. They should, however, be performed with due judgment, after reflecting on their consequences and other such considerations",
    "No one should" : "ever accept bribes. Wealth should not be spent wastefully. One should spend according to one’s income",
    "One should always" : "accurately keep accounts of one’s income and expenditure in accordance with government laws.",
    "According to one’s" : " means, one should give one-tenth or one-twentieth of one’s income in Swaminarayan Bhagwan’s service and to attain his blessings.",
    "Householders should save" : "provisions, money and other possessions according to  their needs, circumstances and means",
    "According to one’s" : "means, one should provide suitable food, fruits, water and other sustenance for one’s domesticated animals and birds.",
    "One should not" : "betray the trust of or deceive others in transactions involving wealth, objects, land or other commodities." ,
    "One should pay" : " employees the amount of money or other forms of remuneration agreed upon, but should never give less.",
    "A satsangi should" : "not commit betrayal. One should uphold one’s promise. A pledge should not be broken.",
    "Rulers should follow" : "dharma that is necessary to govern well. They should provide for the people, foster their growth and  safeguard sanskārs. They should suitably arrange services for health, education, defence, electricity, food, water and other resources for the benefit of all.",
    "A person should" : " be assigned suitable tasks after knowing and considering their qualities, abilities, inclinations and other such factors.",
    "One should happily" : "reside in a country where one can worship Bhagwan and observe one’s dharma.",
    "A person who" : "migrates elsewhere for educational, economic or other gains should continue to reverently practise satsang and observe niyams.",
    "In the country" : "one resides, one should observe the prescribed laws of that country in every way.",
    "During adverse times," : "one should keep patience and joyously worship AksharPurushottam Maharaj within.",
    "If unfavourable circumstances" : " arise where one lives, one should leave that place and live happily elsewhere.",
    "Young boys and" : " girls should acquire education from childhood. They should avoid inappropriate behaviour, bad company and addictions.",
    "Students should study" : "with concentration, enthusiasm and respect. They should not waste their time in useless activities.",
    "From childhood, one" : "should strengthen the virtues of sevā, humility and other virtues. One should never lose courage or be fearful.",
    "From childhood, one " : "should practise satsang, offer devotion and pray. One should daily perform puja and offer  panchāng pranāms to one’s mother and father.",
    "During adolescence and" : "early adulthood, one should exercise greater self-control and refrain from improper physical contact, sights and other activities that destroy one’s energies [physical, mental and spiritual].",
    "One should only" : "undertake ventures that are appropriate and lead to good outcomes and development. However, one should not engage in ventures that merely entertain one’s mind or gratify others.",
    "One should never" : "be lazy in undertaking one’s important tasks. One should have faith in and love towards Bhagwan. One should daily perform puja and do satsang.",
    "In this world," : "the company one keeps has great influence. The type of association moulds one’s life accordingly. Therefore, one should always keep the company of virtuous people and totally shun bad company.",
    "One should renounce" : "the company of those who are lustful, ungrateful, dishonest, hypocritical or deceitful.",
    "One should not" : "associate with those who deny Bhagwan and his incarnations, disapprove of upāsanā to Paramatma or believe Bhagwan, who eternally possesses a form, to be formless. Do not read such texts.",
    "One should renounce" : "the company of those who decry mandirs and Bhagwan’s murtis or denounce truth, non-violence and other such righteous conduct.",
    "One should not" : "associate with those who oppose taking refuge in a guru, Vedic texts  or the path of bhakti.",
    "One should avoid" : "the company of a person who is devoid of devotion, even if such a person is intelligent in worldly activities or learned in the shastras.",
    "One should not" : " associate with those who ridicule faith in spiritual matters and promote logic alone.",
    "Mumukshu devotees should" : "also recognize kusang within satsang and should never  associate with it",
    "One should avoid" : "the company of those who are lax in observing niyams or see human traits in the manifest form of Bhagwan or the guru.",
    "One should avoid" : "the company of those who perceive drawbacks in devotees, speak only ill of others, are wilful or disobey the guru.",
    "One should not" : "associate with those who defame noble works, sacred texts or satsang.",
    "One should shun" : "the company of those whose words weaken one’s conviction in Bhagwan, the guru or satsang.",
    "One should respectfully" : "associate with a person who has firm devotion and conviction in Akshar-Purushottam and who is discerning.",
    "One should respectfully" : "associate with those who do not doubt the words of Bhagwan or the guru, and are trustworthy and wise.",
    "One should respectfully" : "associate with those who always eagerly follow commands with enthusiasm and determination, and are humble and cooperative.",
    "One should respectfully" : "associate with those who lovingly see divinity in both the divine and human-like actions of Bhagwan and the guru.",
    "One should respectfully" : "associate with those in satsang who eagerly imbibe the virtues of others, never speak about others’ flaws and keep suhradbhāv",
    "One should respectfully" : "associate with a person whose conduct and thoughts aim solely to please the guru.",
    "One should study" : "and teach the Sanskrit or vernacular texts of one’s Sampraday according to one’s abilities and preferences.",
    "One should daily" : "read the Vachanamrut, Swamini Vato and the jivancharitras of the  Gunatit gurus with adoration",
    "The teachings and" : "actions of Swaminarayan Bhagwan and the Gunatit gurus are the very life of satsangis. Therefore, satsangis should, with a calm mind, listen to, contemplate on and repeatedly recall them daily with mahimā, faith and devotion.",
    "One should not" : "read, listen to or believe words that go against the Sampraday’s principles or raise doubts.",
    "To reinforce profound" : "devotion towards Swaminarayan Bhagwan in one’s heart, one should observe vows during chāturmās according to the guru’s instructions.",
    "This includes observing" : "chāndrāyan and other fasts, as well as chanting the [Swaminarayan] mantra, performing pradakshinās, listening to spiritual discourses, offering extra dandvat pranāms, and additional devotion with faith, love and the wish to please Bhagwan.",
    "During this time," : "one should also regularly read and teach the Sampraday’s shastras according to one’s preference and ability.",
    "To increase one’s" : "love for Bhagwan, all satsangis should celebrate festivals with great joy and devotion.",
    "The birth festivals" : "of Bhagwan Swaminarayan and the Aksharbrahman gurus should always be celebrated with devotion.",
    "According to their" : "means, satsangis should celebrate festivals to commemorate the special days related to Shri Hari and the gurus.",
    "During festivals, satsangis" : "should devoutly sing kirtans to the accompaniment of instruments and especially discourse on the glory [of God and guru].",
    "On the day" : "Chaitra sud 9, one should offer pujan to Ramchandra Bhagwan. On the day of Shravan vad 8, one should offer pujan to Krishna Bhagwan.",
    "On Shivratri, one" : "should offer pujan to Shankar Bhagwan. On Bhadarva sud 4, one should offer pujan to Ganpati.",
    "On Aso vad 14," : "one should offer pujan to Hanumanji. One should devoutly bow to the deities of any mandir that one comes across.",
    "Vishnu, Shankar, Parvati," : "Ganpati and Surya – these five deities should be revered.",
    "One should have" : "firm conviction in Akshar-Purushottam Maharaj. However, one should not disrespect any other deity.",
    "One should not" : "have contempt for other religions, sampradāys or their followers.  One should never criticize them and should always treat them with respect.",
    "One should never" : "disrespect mandirs, shastras or sadhus. One should honour them appropriately according to one’s capacity",
    "Whichever acts of" : "self-control, fasts and other austerities are undertaken, they should be performed only as bhakti and with the intent to solely please Bhagwan",
    "One should always" : "observe the ekādashi fast with utmost reverence. On this day, prohibited items should never be consumed.",
    "While fasting, one" : "should endeavour to give up sleep during daytime. Sleeping during daytime destroys the merits earned by the austerity of fasting.",
    "If one desires" : " to go on a pilgrimage to the places sanctified by Bhagwan Swami- narayan or the Aksharbrahman gurus, one should do so according to one’s means and preferences.",
    "One may go" : " on a pilgrimage to Ayodhya, Mathura, Kashi, Kedarnath, Badrinath, Rameshwar and other sacred places according to one’s means and preferences.",
    "After arriving at" : "the mandir, all should certainly follow its disciplines. Males should not touch females and females should not touch males",
    "At the mandir," : "males and females should always dress according to the norms of satsang.",
    "A devotee should" : "never go empty-handed for the darshan of Bhagwan or the guru.",
    "During a solar" : "r or lunar eclipse, all satsangis should discontinue all activities and en-gage in Bhagwan’s bhajan. During that time, one should not sleep or eat, but sit in one place to sing kirtans dedicated to Bhagwan and undertake other forms of devotion until the eclipse is over.",
    "When the eclipse" : " is over, all should bathe and soak the clothes they are wearing. Thereafter, renunciants should perform  puja and householder devotees should give donations",
    "One should perform" : "rituals related to birth, death and shrāddh according to the Satsang tradition.",
    "If one has" : "acted immorally, one should piously atone to please Bhagwan.",
    "One should follow" : " the rules described for emergencies only in times of crisis. Do not give up one’s dharma by considering minor difficulties to be major.",
    "When agonizing calamities" : "arise, one should derive strength from Bhagwan and act to protect oneself and others.",
    "When faced with" : "circumstances that may result in death, one who is wise should act according to the guru’s teachings to protect one’s life and live peacefully.",
    "As per their" : "prevailing location, time, age and abilities, all satsangis should genuinely act, atone and engage in dealings according to the traditions of the Satsang and the guru’s instructions.",
    "Observing dharma and" : "niyams elevates the quality of one’s life and also inspires others to live righteously",
    "Devotees of Bhagwan" : "should never fear evil spirits, such as bhuts, prets or pishāchas. They should give up such apprehensions and live happily.",
    "On auspicious and" : " inauspicious occasions, one should recite the sacred ‘Sahajanand Namavali’ while understanding its glory",
    "Kāl, karma and māyā" : "can never harm those who have taken refuge in satsang.",
    "Satsangis should always" : "renounce inappropriate indulgence in the sense pleasures, addictions and superstitions.",
    "Do not believe kāl" : " karma and other factors to be the doers. One should realize Akshar-Purushottam Maharaj as the alldoer.",
    "In difficult times," : "one should remain patient, offer prayers, persevere and keep firm faith in Akshar-Purushottam Maharaj.",
    "Those who wish" : " to join the sadhu āshram should receive initiation from the Akshar- brahman guru. All sadhus should always observe eight-fold brahmacharya",
    "Renunciants should renounce" : "money and should not keep it as their own. They should not even touch money.",
    "To increase their" : "love for AksharPurushottam Maharaj, renunciants should always imbibe the virtues of nishkām, nirlobh, nissvād, nissneh, nirmān, and the other ascetic qualities.",
    "Renunciants should identify" : "their ātmā with Brahman and always offer devotion to Swaminarayan Bhagwan with divyabhāv.",
    "Renunciation is not" : "merely self-denial; it is also endowed with devotion. Such renunciation is for attaining AksharPurushottam Maharaj.",
    "These principles of" : "āgnā and upāsanā are beneficial to all; they destroy misery and bestow utmost bliss.",
    "Those who faithfully" : "and lovingly strengthen āgnā and upāsanā in their life according to this shastra earn the pleasure of Bhagwan and become a recipient of his grace. While living, they attain the brāhmi sthiti described in the shastras. They master ekāntik dharma. They attain the eternal and divine Akshardham of Bhagwan, ultimate moksha and bliss.",
    "Attaining oneness with" : "Aksharbrahman and offering humble devotion to Purushottam is considered to be mukti.",
    "Here, in this" : "way, āgnā and upāsanā have been concisely described. One should obtain further details from the Sampraday’s shastras.",
    "Satsangis should daily" : "read this ‘Satsang Diksha’ shastra with concentration. Those who are unable to read should lovingly listen to it. Moreover, all should faithfully endeavour to practise it.",
    "The Akshar-Purushottam" : "siddhānt was established by Paramatma Parabrahman Swaminarayan Bhagwan and spread by the Gunatit gurus. This shastra is written based on this siddhānt. ",
    "To grant moksha" : "to the mumukshus, the compassionate Parabrahman Swaminarayan Bhagwan manifested on this earth out of sheer grace. For all devotees who sought refuge he provided for their wellbeing and prosperity. He benefited them both in this world and beyond.",
    "May the divine," : "compassionate blessings of Paramatma Parabrahman Swaminarayan Bhagwan always shower everywhere.",
    "May all grief" : "the three types of miseries, calamities, distresses, ignorance, doubts and fears of all be destroyed. ",
    "Through Bhagwan’s grace," : "may all attain good health, happiness, utmost peace and ultimate moksha.",
    "May no one" : "harm or hate others. May everyone always respect each other. ",
    "May everyone develop" : "firm love, conviction and unwavering belief in AksharPurushottam, and may everyone’s faith forever flourish.",
    "May all devotees" : "become resolute in following dharma and attain the pleasure of Sahajanand Paramatma.",
    "May the world" : " be filled with people who are peaceful, righteous and engrossed in spiritual endeavours, and who tread the path of spirituality.",
    "May mutual unity," : "suhradbhāv, friendship, compassion, tolerance and love flourish among all people.",
    "Through the divine" : "association of Brahman and Parabrahman, may all strengthen nirdoshbhāv and divyabhāv towards the Satsang.",
    "May all identify" : "their ātmā as aksharrup and offer devotion to Purushottam Sahajanand.",
    "The writing of" : "this shastra began on Magha (Maha) sud 5 [30 January 2020 CE] of Vikram Samvat 2076 and was completed on Chaitra sud 9 [2 April 2020 CE], on the divine birthday celebration of Swaminarayan Bhagwan",
    "On the occasion" : "of Pramukh Swami Maharaj’s birth centenary celebrations, this shastra is being offered with joy and devotion as a tribute to: (1) Parabrahman Sahajanand Shri Hari – the focus of upāsanā, (2) Mul Akshar Gunatitanand Swami, (3) Bhagatji Maharaj – the embodiment of wisdom, (4) Yagnapurushdasji (Shastriji Maharaj) – the protector of the true siddhānt, (5) the forever affectionate and blissful embodiment of Aksharbrahman, Yogiji Maharaj and (6) Guru Pramukh Swami Maharaj, who is humble and revered throughout the world.",
    "May Swaminarayan Bhagwan," : "who is Akshar-Purushottam Maharaj himself,18 spread supreme bliss and auspiciousness throughout the entire world."


};

var dictIndex = 0;

let keys = Object.keys(dict);
let values = Object.values(dict);

let canGoNext = false;
let canCheckAnswer = false;
let canShowAnswer = true;
var penaltiesIndex = 0;


console.log("Can go next " + canGoNext);
console.log("Can check anwser " + canCheckAnswer);
console.log("Penalties index " + penaltiesIndex);




function incorrect()
{
    if(canCheckAnswer)
    {
        switch(playerTurn) 
        {
            case 1:
            document.getElementById("playerOnePenalty").innerHTML = penalties[penaltiesIndex];
            penaltiesIndex++;
            playerTurn++;
            break;
            case 2:
                document.getElementById("playerTwoPenalty").innerHTML = penalties[penaltiesIndex];
                penaltiesIndex++;
                playerTurn++;
            break;
            case 3:
                document.getElementById("playerThreePenalty").innerHTML = penalties[penaltiesIndex];
                penaltiesIndex++;
                playerTurn++;
            break;
            case 4:
                document.getElementById("playerFourPenalty").innerHTML = penalties[penaltiesIndex];
                penaltiesIndex++;
                playerTurn++;
            break;
            default:
                document.getElementById("playerOnePenalty").innerHTML = penalties[penaltiesIndex];
                penaltiesIndex++;
                playerTurn++;
                playerTurn = 2;
        } // end of switch

        console.log("incorrect");
        canGoNext = true;
        canCheckAnswer = false;
    }
}

function correct()
{
    if(canCheckAnswer)
    {
        switch(playerTurn) 
        {
            case 1:
                playerOnePoints++;
                document.getElementById("playerOnePointsHTML").innerHTML = playerOnePoints;
                // playerTurn++;
              break;
            case 2:
                playerTwoPoints++;
                document.getElementById("playerTwoPointsHTML").innerHTML = playerTwoPoints;
                // playerTurn++;
              break;
            case 3:
                playerThreePoints++;
                document.getElementById("playerThreePointsHTML").innerHTML = playerThreePoints;
                // playerTurn++;
            break;
            case 4:
                playerFourPoints++;
                document.getElementById("playerFourPointsHTML").innerHTML = playerFourPoints;
                // playerTurn++;
            break;
            default:
                playerOnePoints++;
                document.getElementById("playerOnePointsHTML").innerHTML = playerOnePoints;
                playerTurn = 2;
        } // end of switch
    
        console.log("correct!");
        canGoNext = true;
        canCheckAnswer = false;
        canShowAnswer = false;


        // change the shlok to the next first three words
        





    }
    
}

function showAnswer()
{
    if(canShowAnswer)
    {
        console.log("show answer");
        document.getElementById("paragraph").innerHTML = values[dictIndex];
        dictIndex++;
        canCheckAnswer = true;
        canShowAnswer = false;
    }

    
}


function previous()
{
    if(canGoNext)
    {
        dictIndex--;
        console.log("previous");
        // shows the answer to first three words
        document.getElementById("paragraph").innerHTML = keys[dictIndex];
    }
}

function next()
{
    if(canGoNext)
    {
        console.log("next");
        // shows first three words
        document.getElementById("paragraph").innerHTML = keys[dictIndex];
        //console.log(keys[dictIndex]);
        playerTurn++;
        canGoNext = false;
        canCheckAnswer = false;
        canShowAnswer = true;
    }
    
    
}



