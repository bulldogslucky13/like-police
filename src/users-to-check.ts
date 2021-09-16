export type GroupMeUserCondensed = {
  user_id: string;
  nickname: string;
  id: string;
  name: string;
};

const usersToCheck: Record<string, GroupMeUserCondensed> = {
  "52669412": {
    user_id: "52669412",
    nickname: "Carson Cox",
    id: "683637642",
    name: "Carson Cox",
  },
  "51421500": {
    user_id: "51421500",
    nickname: "AJ Blight",
    id: "683637644",
    name: "Aj Blight",
  },
  "95391443": {
    user_id: "95391443",
    nickname: "Hayden Goodiel",
    id: "683637645",
    name: "Hayden Goodiel",
  },
  "52351537": {
    user_id: "52351537",
    nickname: "Nick Guizol",
    id: "683637647",
    name: "Nick Guizol",
  },
  "50668626": {
    user_id: "50668626",
    nickname: "Michael Bishop",
    id: "683637648",
    name: "Michael Bishop",
  },
  "79722243": {
    user_id: "79722243",
    nickname: "Kalen Young",
    id: "683637650",
    name: "Kalen Young",
  },
  "68658807": {
    user_id: "68658807",
    nickname: "Michael Sowell",
    id: "683637651",
    name: "Michael Sowell",
  },
  "86418671": {
    user_id: "86418671",
    nickname: "Brandon Wilson",
    id: "683637652",
    name: "Brandon Wilson",
  },
  "48066190": {
    user_id: "48066190",
    nickname: "Rob Walker",
    id: "683637655",
    name: "Rob Walker",
  },
  "49315209": {
    user_id: "49315209",
    nickname: "Cooper Olson",
    id: "683637656",
    name: "Cooper O",
  },
  "93908039": {
    user_id: "93908039",
    nickname: "Atticus Kohler",
    id: "683637659",
    name: "Atticus Kohler",
  },
  "Roy Cofone": {
    user_id: "69775503",
    nickname: "Roy Cofone",
    id: "683637662",
    name: "Roy Cofone",
  },
  "54304639": {
    user_id: "54304639",
    nickname: "Quaid Morgan",
    id: "683637665",
    name: "Quaid Morgan",
  },
  "62636368": {
    user_id: "62636368",
    nickname: "Anthony Marciano",
    id: "683637666",
    name: "Anthony Marciano",
  },
  "27845766": {
    user_id: "27845766",
    nickname: "Carson Klingman",
    id: "683637667",
    name: "Carson Klingman",
  },
  "42284283": {
    user_id: "42284283",
    nickname: "Matt Kelly",
    id: "683637668",
    name: "matt kelly",
  },
  "95252672": {
    user_id: "95252672",
    nickname: "Clayton Peretti",
    id: "683637669",
    name: "Clayton Peretti",
  },
  "52715065": {
    user_id: "52715065",
    nickname: "Andrew Rapp",
    id: "683637672",
    name: "Andrew Rapp",
  },
  "87777956": {
    user_id: "87777956",
    nickname: "Bryce",
    id: "683637673",
    name: "Bryce Yates",
  },
  "64847414": {
    user_id: "64847414",
    nickname: "Aidan Bell",
    id: "683637674",
    name: "Aidan Bell",
  },
  "54323861": {
    user_id: "54323861",
    nickname: "Ben Newby",
    id: "683637677",
    name: "Ben Newby",
  },
  "39664787": {
    user_id: "39664787",
    nickname: "Blake Van Gundy",
    id: "683637678",
    name: "Blake Van Gundy",
  },
  "37344125": {
    user_id: "37344125",
    nickname: "Chris Ortiz",
    id: "683637682",
    name: "Chris Ortiz",
  },
  "68947582": {
    user_id: "68947582",
    nickname: "Jack Washeck",
    id: "683637683",
    name: "Jack Washeck",
  },
  "83670945": {
    user_id: "83670945",
    nickname: "Robby Berkland",
    id: "683637687",
    name: "Robby Berkland",
  },
  "85426366": {
    user_id: "85426366",
    nickname: "Will Rhodes",
    id: "683637689",
    name: "Will Rhodes",
  },
  "48881998": {
    user_id: "48881998",
    nickname: "Luke Robeson",
    id: "683637693",
    name: "Luke Robeson",
  },
  "95089814": {
    user_id: "95089814",
    nickname: "Landon Olsen",
    id: "683637695",
    name: "Landon Olsen",
  },
  "43572854": {
    user_id: "43572854",
    nickname: "Will Roemer",
    id: "683637696",
    name: "Will Roemer",
  },
  "46310975": {
    user_id: "46310975",
    nickname: "Wiley Bennett",
    id: "683637697",
    name: "Wiley Bennett",
  },
  "28627107": {
    user_id: "28627107",
    nickname: "Jackson Conner",
    id: "683637698",
    name: "Jackson Conner",
  },
  "24680130": {
    user_id: "24680130",
    nickname: "Ben Tkach",
    id: "683637699",
    name: "Ben Tkach",
  },
  "95337432": {
    user_id: "95337432",
    nickname: "Camilo Pardo",
    id: "683637702",
    name: "Camilo Pardo",
  },
  "48931950": {
    user_id: "48931950",
    nickname: "Josh Bennett",
    id: "683637704",
    name: "Josh Bennett",
  },
  "95486047": {
    user_id: "95486047",
    nickname: "Cole Newcombe",
    id: "683637706",
    name: "Cole Newcombe",
  },
  "95256876": {
    user_id: "95256876",
    nickname: "Pierce Davis",
    id: "683637707",
    name: "Pierce",
  },
  "33463593": {
    user_id: "33463593",
    nickname: "Chadd Auletta",
    id: "683637708",
    name: "Chadd Auletta",
  },
  "58472219": {
    user_id: "58472219",
    nickname: "Cole Wilson",
    id: "683637710",
    name: "Cole Wilson",
  },
  "47067838": {
    user_id: "47067838",
    nickname: "Cyrus Mortazavi",
    id: "683637711",
    name: "Cyrus Mortazavi",
  },
  "51300010": {
    user_id: "51300010",
    nickname: "Kian Wilcox",
    id: "683637712",
    name: "Kian Wilcox",
  },
  "53561017": {
    user_id: "53561017",
    nickname: "Dylan Harris",
    id: "683637713",
    name: "Dylan Harris",
  },
  "89282566": {
    user_id: "89282566",
    nickname: "Caleb Corbitt",
    id: "683637714",
    name: "Caleb Corbitt",
  },
  "95405758": {
    user_id: "95405758",
    nickname: "Brady Gampper",
    id: "683637715",
    name: "Brady Gampper",
  },
  "88435295": {
    user_id: "88435295",
    nickname: "Mack Jones",
    id: "683637719",
    name: "Mack Jones",
  },
  "35728853": {
    user_id: "35728853",
    nickname: "Ian Warlick",
    id: "683637721",
    name: "Ian W",
  },
  "51014299": {
    user_id: "51014299",
    nickname: "Michael Shelton",
    id: "683637724",
    name: "Michael Shelton",
  },
  "49147770": {
    user_id: "49147770",
    nickname: "Noah Hunter",
    id: "683637726",
    name: "Noah Hunter",
  },
};

export const arrayOfUserIdsToCheck = Object.keys(usersToCheck);
