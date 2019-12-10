const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

var i = 0;
var txt = 'Welcome to the forest';
var speed = 120;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typed").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajaxed").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "flavor.txt", true);
  xhttp.send();
}

const textNodes = [
  {
    id: 1,
    text: 'You are a seasoned adventurer. You have been given the title...',
    options: [
      {
        text: 'Wake of the Ancients',
        setState: { ancients: true, nosword: true },
        nextText: 2
      },
      {
        text: 'Guardian of Light',
        setState: { guardian: true, nosword: true },
        nextText: 3
      },
      {
        text: 'The Fallen',
        setState: { fallen: true, nosword: true },
        nextText: 4
      },
      {
        text: 'Elenor\'s Bane',
        setState: { elenor: true, nosword: true },
        nextText: 5
      }
    ]
  },
  {
    id: 2,
    text: 'Wake of the Ancients, after being given the dark secrets of the past, to harness otherworldly magicks and make them your own.',
    options: [
      {
        text: 'Begin your story',
        nextText: 6
      }
    ]
  },
  {
    id: 3,
    text: 'Guardian of Light: your righteousness has earned you powers to harness and connect with the elements themselves.',
    options: [
      {
        text: 'Begin your story',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'The Fallen, when you were cast out from your own kind. Your powers were stripped away and you were left for naught.',
    options: [
      {
        text: 'Begin your story',
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    text: 'Elenor\'s Bane, after magic tempted and tore you apart. You started a new life, your memories lost, all but the ones of her...',
    options: [
      {
        text: 'Begin your story',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: 'You have been sent to a mysterious forest. The task: to find the source of its unusual magic, and retrieve an enchanted sword that was lost in a previous expedition.',
    options: [
      {
        text: 'Inspect the foliage',
        nextText: 7
      },
      {
        text: 'Listen',
        nextText: 8
      },
      {
        text: 'Enter the forest',
        nextText: 9
      }
    ]
  },
  {
    id: 7,
    text: 'The leaves blaze brilliant reds, yellows, greens. It is truly breathtaking.',
    options: [
      {
        text: 'Enter the forest',
        nextText: 9
      }
    ]
  },
  {
    id: 8,
    text: 'You take a moment to listen. Birds chirp overhead. In the distance...singing?',
    options: [
      {
        text: 'Enter the forest',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'Entering the forest is like stepping through a portal. The air is full; the wind dances with the leaves as it clears a path for you; your footfalls leave a satisfying crunch in your wake.',
    options: [
      {
        text: 'Seek shelter',
        nextText: 10
      },
      {
        text: 'Watch your step',
        nextText: 11
      },
      {
        text: 'Listen',
        nextText: 12
      },
      {
        text: 'Ask for directions',
        requiredState: (currentState) => currentState.guardian,
        nextText: 13
      }
    ]
  },
  {
    id: 10,
    text: 'You immediately look for a place to rest... It doesn\'t take long before you find a grove of trees with long, gnarled branches. Perfect for a roof.',
    options: [
      {
        text: 'Build a lean-to',
        nextText: 14
      },
      {
        text: 'Just use the ground',
        nextText: 15
      }
    ]
  },
  {
    id: 11,
    text: 'You tread carefully, noticing the delicate fauna of the woods. Snails, bumblebees. You look up suddenly to notice a snake in your path.',
    options: [
      {
        text: 'Run!',
        nextText: 16
      },
      {
        text: 'Watch',
        nextText: 17
      },
      {
        text: 'Speak',
        nextText: 18
      }
    ]
  },
  {
    id: 12,
    text: 'There is an echo of frogs chirping in every direction. To the east, a familiar tune.',
    options: [
      {
        text: 'Continue on the path',
        nextText: 19
      },
      {
        text: 'Follow the voice',
        nextText: 20
      },
      {
        text: 'Sing',
        nextText: 21
      }
    ]
  },
  {
    id: 13,
    text: 'You catch a leaf in your hand and implore your divine senses. You feel the leaf tugging towards the east.',
    options: [
      {
        text: 'Continue on the path',
        nextText: 19
      },
      {
        text: 'Go east',
        nextText: 20
      }
    ]
  },
  {
    id: 14,
    text: 'The lean-to was perfect! A small rain passes over the forest, but you are snug.',
    options: [
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.ancients,
        nextText: 30
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.guardian,
        nextText: 31
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.fallen,
        nextText: 32
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.elenor,
        nextText: 33
      }
    ]
  },
  {
    id: 15,
    text: 'A light rain begins...it\'s cold, but thankfully the treetops give you some cover.',
    options: [
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.ancients,
        nextText: 30
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.guardian,
        nextText: 31
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.fallen,
        nextText: 32
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.elenor,
        nextText: 33
      }
    ]
  },
  //RUN
  {
    id: 16,
    text: 'You don\'t look back until the creature is out of sight. You have lost the path.',
    options: [
      {
        text: 'Look for the path',
        nextText: 22
      },
      {
        text: 'Make camp',
        nextText: 23
      }
    ]
  },
  //WATCH
  {
    id: 17,
    text: 'Shocked into stillness, you lock eyes with the creature. It begins moving closer.',
    options: [
      {
        text: '"Wh-wh-"',
        nextText: 24
      },
      {
        text: 'Run!',
        nextText: 16
      }
    ]
  },
  //SPEAK
  {
    id: 18,
    text: '"Oh! I, uh, hello..." It does not respond, but begins to slither towards you.',
    options: [
      {
        text: '"Wait!"',
        nextText: 24
      },
      {
        text: 'Run!',
        nextText: 16
      }
    ]
  },
  //CONTINUE ON THE PATH
  {
    id: 19,
    text: 'You keep to the path, breathing in the fresh crisp air. After a while of traveling, you spot a snake in your path.',
    options: [
      {
        text: 'Run!',
        nextText: 16
      },
      {
        text: 'Watch',
        nextText: 17
      },
      {
        text: 'Speak',
        nextText: 18
      }
    ]
  },
  //GO EAST
  {
    id: 20,
    text: 'You leave the path. The deeper in the forest you travel, the more dense it grows together. You become hopelessly lost.',
    options: [
      {
        text: 'Listen',
        nextText: 25
      },
      {
        text: 'Make camp',
        nextText: 23
      },
      {
        text: 'Regret',
        requiredState: (currentState) => currentState.ancients,
        nextText: 26
      },
      {
        text: 'Regret',
        requiredState: (currentState) => currentState.guardian,
        nextText: 27
      },
      {
        text: 'Regret',
        requiredState: (currentState) => currentState.fallen,
        nextText: 28
      },
      {
        text: 'Regret',
        requiredState: (currentState) => currentState.elenor,
        nextText: 29
      }
    ]
  },
  {
    id: 21,
    text: 'You sing aloud, your voice echoing amongst the trees, and wait for an answer. ........ There is none. You feel a little stupid.',
    options: [
      {
        text: 'Continue on the path',
        nextText: 19
      },
      {
        text: 'Wander into the woods',
        nextText: 20
      }
    ]
  },
  //LOOK FOR THE PATH
  {
    id: 22,
    text: 'Your cowardice has cost you your senses. You are lost, and it grows dark.',
    options: [
      {
        text: 'Make camp',
        nextText: 23
      }
    ]
  },
  //MAKE CAMP
  {
    id: 23,
    text: 'You find a large tree and make camp at its roots. The moon bathes your world in a soft glow.',
    options: [
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.ancients,
        nextText: 30
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.guardian,
        nextText: 31
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.fallen,
        nextText: 32
      },
      {
        text: 'Dream',
        requiredState: (currentState) => currentState.elenor,
        nextText: 33
      }
    ]
  },
  //SNAKE SPEAKS
  {
    id: 24,
    text: 'ฬђคՇ เร Շђเร ๓คﻮเς ץ๏ย รєєк',
    options: [
      {
        text: 'RUN!',
        nextText: 16
      }
    ]
  },
  {
    id: 25,
    text: 'The faint notes of a song have faded to silence. Now...crickets, frogs, and nightfall.',
    options: [
      {
        text: 'Make camp',
        nextText: 23
      }
    ]
  },
//REGRET
{
  id: 26,
  text: 'I must...I must consult my magicks....They will surely know what to do.',
  options: [
    {
      text: 'Make camp',
      nextText: 23
    }
  ]
},
{
  id: 27,
  text: 'The spirits are counting on me! They can\'t have chosen the wrong hero...',
  options: [
    {
      text: 'Make camp',
      nextText: 23
    }
  ]
},
{
  id: 28,
  text: 'My socks are wet. This sucks.',
  options: [
    {
      text: 'Make camp',
      nextText: 23
    }
  ]
},
{
  id: 29,
  text: 'No. No time for regret. I must redeem myself. No matter the cost.',
  options: [
    {
      text: 'Make camp',
      nextText: 23
    }
  ]
},


  // DREAM SEQUENCES
  {
    id: 30,
    text: 'You feel the pull of magical forces...fighting amongst each other, in a fruitless effort to control what cannot ever be theirs.... In your hands is a sword. Something that can stop the fighting. For good.',
    options: [
      {
        text: 'Wake up, adventurer',
        nextText: 34
      }
    ]
  },
  {
    id: 31,
    text: 'You hear the spirits cry out. They are hurt...victims of a raging battle. They cry out for help, for protection. Can you save them, reader?',
    options: [
      {
        text: 'Wake up, adventurer',
        nextText: 34
      }
    ]
  },
  {
    id: 32,
    text: 'You see the faces of the people who cast you out. Faces of people you once trusted, now twisted in scorn as they look upon you. But you see vines twisting around their feet as they fall prey to their own greed.',
    options: [
      {
        text: 'Wake up, adventurer',
        nextText: 34
      }
    ]
  },
  {
    id: 33,
    text: 'The morning air fills with song as you run through the forest. Your wife, always a step ahead of you, her back turned to you as she continues to walk... You reach out to grab her, but you can\'t catch up... Elenor....Elenor, please!',
    options: [
      {
        text: 'Wake up, adventurer',
        nextText: 34
      }
    ]
  },

  //BEGIN DAY 2
  {
    id: 34,
    text: 'You wake to a warm sunrise. Another day in this forest.',
    options: [
      {
        text: 'Seek food',
        setState: { insight: true },
        nextText: 35
      },
      {
        text: 'Call upon your magic',
        requiredState: (currentState) => currentState.ancients,
        setState: { sword: true, nosword: false },
        nextText: 36
      },
      {
        text: 'Call to the spirits',
        requiredState: (currentState) => currentState.guardian,
        setState: { strong: true },
        nextText: 37
      },
      {
        text: 'Curse',
        requiredState: (currentState) => currentState.fallen,
        setState: { disenchanted: true },
        nextText: 38
      },
      {
        text: 'Call to Elenor',
        requiredState: (currentState) => currentState.elenor,
        setState: { alert: true },
        nextText: 39
      },
      {
        text: 'Make camp',
        nextText:40
      },
      {
        text: 'Venture onward',
        nextText:41
      }
    ]
  },
  {
    id: 35,
    text: 'You find a large berry bush sliced cleanly in half. Parts of its body is burnt, but there are still berries intact. You gather enough for a hearty snack.',
    options: [
      {
        text: 'Continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 36,
    text: 'Your eyes close. Visions of the battle again play in your mind, and something grows hot in your grasp. When you open your eyes, a sword is clasped in your hands.',
    options: [
      {
        text: 'Inspect the sword',
        nextText: 44
      }
    ]
  },
  {
    id: 44,
    text: 'It radiates power and makes you feel...angry.',
    options: [
      {
        text: 'Continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 37,
    text: 'You call to the elements and promise them protection from those that wish to harm them. You feel a little stronger.',
    options: [
      {
        text: 'Continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 38,
    text: 'You say a bad word. Do you feel better now?',
    options: [
      {
        text: 'Continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 39,
    text: 'You close your eyes and cling to the song from your dream. It\'s almost as if you can feel her presence. But she can\'t have..survived?',
    options: [
      {
        text: 'Continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 40,
    text: 'You begin to look for-- wait, make camp? You just woke up!',
    options: [
      {
        text: 'But I\'m tired',
        nextText: 42
      },
      {
        text: 'Fine, continue on',
        nextText: 41
      }
    ]
  },
  {
    id: 42,
    text: 'I will fight you',
    options: [
      {
        text: 'What??',
        nextText: 43
      }
    ]
  },
  {
    id: 43,
    text: 'Don\'t sass me',
    options: [
      {
        text: 'Okay, okay! Continue on',
        nextText: 41
      }
    ]
  },
//CONTINUE ON
  {
    id: 41,
    text: 'The trees grow thicker and taller the farther in you traverse, and eventually, you find yourself blocked by a wall of brambles.',
    options: [
      {
        text: 'Inspect the brambles',
        nextText: 45
      },
      {
        text: 'Inspect the area',
        nextText: 46
      },
      {
        text: 'Look for burn-marks',
        requiredState: (currentState) => currentState.insight,
        nextText: 49
      },
      {
        text: 'Use the sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 50
      },
      {
        text: 'Release the elements',
        requiredState: (currentState) => currentState.strong,
        nextText: 51
      },
      {
        text: 'Curse a little louder',
        requiredState: (currentState) => currentState.disenchanted,
        nextText: 52
      },
      {
        text: 'Push through',
        requiredState: (currentState) => currentState.alert,
        nextText: 53
      }
    ]
  },
  {
    id: 45,
    text: 'They extend as far to your left and right as you can see, effectively blocking the path.',
    options: [
      {
        text: 'Inspect the area',
        nextText: 46
      },
      {
        text: 'Look for burn-marks',
        requiredState: (currentState) => currentState.insight,
        nextText: 49
      },
      {
        text: 'Use the sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 50
      },
      {
        text: 'Release the elements',
        requiredState: (currentState) => currentState.strong,
        nextText: 51
      },
      {
        text: 'Curse a little louder',
        requiredState: (currentState) => currentState.disenchanted,
        nextText: 52
      },
      {
        text: 'Push through',
        requiredState: (currentState) => currentState.alert,
        nextText: 53
      }
    ]
  },
  {
    id: 46,
    text: 'There are ancient trees all around you, with large branches that seem to bow around your path.',
    options: [
      {
        text: 'Use a branch',
        setState: { branch: true },
        nextText: 47
      },
      {
        text: 'Climb a tree',
        nextText: 48
      },
      {
        text: 'Look for burn-marks',
        requiredState: (currentState) => currentState.insight,
        nextText: 49
      },
      {
        text: 'Use the sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 50
      },
      {
        text: 'Release the elements',
        requiredState: (currentState) => currentState.strong,
        nextText: 51
      },
      {
        text: 'Curse a little louder',
        requiredState: (currentState) => currentState.disenchanted,
        nextText: 52
      },
      {
        text: 'Push through',
        requiredState: (currentState) => currentState.alert,
        nextText: 53
      }
    ]
  },
  {
    id: 47,
    text: 'You snap a branch from a tree and hack your way through the brambles.',
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },
  {
    id: 48,
    text: 'You find a sturdy branch to balance yourself upon. With some effort, you make your way from branch to branch, up and over the obstacle in your way.',
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },

  //SPECIAL OPTIONS
  {
    id: 49,
    text: 'Remembering the burnt berry bush, you take a step back and inspect your surroundings. Sure enough, there is a small patch of brambles that has been similarly hacked and sliced apart. You are able to push through the opening with ease.',
    requiredState: (currentState) => currentState.insight,
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },
  {
    id: 50,
    text: 'You feel a sudden rush of adrenaline as the sword\'s blade glows red-hot. You take a swing, and the brambles fall, as if you were cutting wheat.',
    requiredState: (currentState) => currentState.sword,
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },
  {
    id: 51,
    text: 'You feel a sudden calm as you step forward, placing your hand on the obstacle in front of you. The air itself seems to fall silent as, with a creaaaaaak, the brambles shift and writhe open, creating an elegant archway around you.',
    requiredState: (currentState) => currentState.strong,
    options: [
      {
        text: 'Continue on',
        nextText: 55
      },
    ]
  },
  {
    id: 52,
    text: 'You feel a pull from your chest as you attempt to release the magic you once had inside. The world suddenly turns dark in front of your eyes, and you feel a searing pain along your arms. When your vision returns, a sword is embedded in the dirt in front of you.',
    requiredState: (currentState) => currentState.disenchanted,
    setState: { sword: true, nosword: false },
    options: [
      {
        text: 'Slash the brambles',
        nextText: 54
      }
    ]
  },
  {
    id: 54,
    text: 'It\'s like cutting butter. The brambles fall under the sheer weight of the sword. You feel empowered.',
    requiredState: (currentState) => currentState.disenchanted,
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },
  {
    id: 53,
    text: 'You feel her presence! You feel a cold panic rising in your chest as you begin to dig, dig through the weeds with a growing desperation to see the only key to your past. Through, and through, until your hands are rubbed raw, but you finally carve your way through.',
    requiredState: (currentState) => currentState.alert,
    options: [
      {
        text: 'Continue on',
        nextText: 55
      }
    ]
  },
  //CONTINUE ON
  {
    id: 55,
    text: 'You pass through the brambles to discover a clearing. Ahead of you, two figures stand opposite each other.',
    options: [
      {
        text: 'Look down',
        requiredState: (currentState) => currentState.nosword,
        nextText: 56
      },
      {
        text: 'Inspect the figures',
        requiredState: (currentState) => currentState.sword,
        nextText: 57
      }
    ]
  },
  {
    id: 56,
    text: 'A sword is nestled in the leaves in front of you. Its blade shines a brilliant red in the light. You gather that this is the sword you were sent to retrieve. As you pick it up, the sword grows warm to the touch. You feel much stronger.',
    setState: { sword: true, nosword: false },
    options: [
      {
        text: 'Inspect the figures',
        nextText: 57
      }
    ]
  },
  //INSPECT THE FIGURES
  {
    id: 57,
    text: 'They are a soldier and a tree nymph, frozen where they stand. The former holds their hand in the air, once wielding the sword you now hold, while the latter seems to have been furiously casting a spell.',
    options: [
      {
        text: 'Inspect the surroundings',
        nextText: 58
      },
      {
        text: 'Inspect the pair',
        nextText: 59
      },
      {
        text: 'Speak to the soldier',
        requiredState: (currentState) => currentState.ancients,
        nextText: 60
      },
      {
        text: 'Call the elements',
        requiredState: (currentState) => currentState.guardian,
        nextText: 62
      },
      {
        text: 'Channel your sword',
        requiredState: (currentState) => currentState.fallen,
        nextText: 66
      },
      {
        text: 'Inspect the soldier',
        requiredState: (currentState) => currentState.elenor,
        nextText: 71
      }
    ]
  },
  //INSPECT THE SURROUNDINGS
  {
    id: 58,
    text: 'Even without focusing your senses, you can feel an overwhelming aura of magic. It emanates from the tree nymph; her heart, though still, glows softly through her chest. She must be the reason for this forest\'s incredible magic. You were sent here for her.',
    options: [
      {
        text: 'Inspect the pair',
        nextText: 59
      },
      {
        text: 'Speak to the soldier',
        requiredState: (currentState) => currentState.ancients,
        nextText: 60
      },
      {
        text: 'Call the elements',
        requiredState: (currentState) => currentState.guardian,
        nextText: 62
      },
      {
        text: 'Channel your sword',
        requiredState: (currentState) => currentState.fallen,
        nextText: 66
      },
      {
        text: 'Inspect the soldier',
        requiredState: (currentState) => currentState.elenor,
        nextText: 71
      }
    ]
  },
  {
    id: 59,
    text: 'The soldier is lunging forward, mid-strike. A crest on her armor symbolizes the army that had sent you on this quest. The nymph has one eye open, glassy and frozen; the other is hidden behind maple leaves that shroud most of her body. The pair are connected by a single strand of vines.',
    options: [
      {
        text: 'Inspect the surroundings',
        nextText: 58
      },
      {
        text: 'Speak to the soldier',
        requiredState: (currentState) => currentState.ancients,
        nextText: 60
      },
      {
        text: 'Speak to the nymph',
        requiredState: (currentState) => currentState.ancients,
        nextText: 61
      },
      {
        text: 'Call the elements',
        requiredState: (currentState) => currentState.guardian,
        nextText: 62
      },
      {
        text: 'Channel your sword',
        requiredState: (currentState) => currentState.fallen,
        nextText: 66
      },
      {
        text: 'Inspect the soldier',
        requiredState: (currentState) => currentState.elenor,
        nextText: 71
      }
    ]
  },
  {
    id: 60,
    text: 'You send your magic and feel the soul of the soldier. She is screaming. "She holds the magic! Everything in this wood is hers. We will be overtaken if she is not stopped!"',
    options: [
      {
        text: 'Inspect the surroundings',
        nextText: 58
      },
      {
        text: 'Inspect the pair',
        nextText: 59
      },
      {
        text: 'Speak to the nymph',
        requiredState: (currentState) => currentState.ancients,
        nextText: 61
      },
      {
        text: 'Stab the soldier',
        nextText: 94
      }
    ]
  },
  {
    id: 61,
    text: 'ɭєคשє Շђเร קɭคςє ,,,  ץ๏ย кภ๏ฬ ภ๏Շ Շђє ๓คﻮเς ץ๏ย ฬเєɭ๔',
    options: [
      {
        text: 'Inspect the surroundings',
        nextText: 58
      },
      {
        text: 'Inspect the pair',
        nextText: 59
      },
      {
        text: 'Speak to the soldier',
        requiredState: (currentState) => currentState.ancients,
        nextText: 60
      },
      {
        text: 'Stab the nymph',
        nextText: 77
      }
    ]
  },
  //CALL THE ELEMENTS
  {
    id: 62,
    text: 'You feel flames trapped inside the sword. The wind carries a voice.',
    options: [
      {
        text: 'Listen',
        nextText: 58
      }
    ]
  },
  {
    id: 63,
    text: 'Շђเร เร ๏ยг ђ๏๓є Շђเร เร ๏ยг ђ๏๓є Շђเร เร ๏ยг ђ๏๓є Շђเร เร ๏ยг ђ๏๓є Շђเร เร ๏ยг ђ๏๓є Շђเร เร ๏ยг ђ๏๓є Շђเร เร ๏ยг ђ๏๓є Շђเร เร ๏ยг ђ๏๓є Շђเร เร ๏ยг ђ๏๓є Շђเร เร ๏ยг ђ๏๓є Շђเร เร ๏ยг ђ๏๓є',
    options: [
      {
        text: 'Break the sword',
        nextText: 64
      },
      {
        text: 'Stab the soldier',
        nextText: 94
      },
      {
        text: 'Stab the nymph',
        nextText: 77
      },
      {
        text: 'Cut the vines',
        nextText: 96
      }
    ]
  },
  {
    id: 64,
    text: 'Channeling your magicks together, you release the fury of fire until the sword\'s metal shrivels and twists open on the ground. The foliage catches fire, and the forest around you suddenly begins to blaze.',
    setState: { sword: false, nosword: true },
    options: [
      {
        text: 'Grab the sword remains',
        setState: { remains: true },
        nextText: 65
      },
      {
        text: 'Run!',
        nextText: 78
      }
    ]
  },
  {
    id: 65,
    text: 'You grab what remains of the sword and flee. With this, at least, you can have something to show the Quest Warden.',
    options: [
      {
        text: 'Leave the forest',
        nextText: 78
      }
    ]
  },

  //CHANNEL YOUR SWORD
  {
    id: 66,
    text: 'You feel the power of this sword well up inside you. Oh, how you\'ve missed this feeling! It\'s so strong! It\'s...it\'s too strong...',
    options: [
      {
        text: 'Scream',
        nextText: 67
      }
    ]
  },
  {
    id: 67,
    text: 'You cannot control your body. The sword takes all of your strength to hold as it raises itself up...up...',
    options: [
      {
        text: 'Scream',
        nextText: 68
      }
    ]
  },
  {
    id: 68,
    text: 'It swings into the heart of the nymph. You feel its anger turn into flames inside of her chest. Around you, the trees begin to alight in a ghastly fire.',
    options: [
      {
        text: 'Scream',
        nextText: 69
      }
    ]
  },
  {
    id: 69,
    text: 'ฬђคՇ ђคשє ץ๏ย ๔๏ภє',
    options: [
      {
        text: 'Scream',
        nextText: 70
      }
    ]
  },
  {
    id: 70,
    text: 'เ Շђ๏ยﻮђՇ קє๏קɭє ς๏ยɭ๔ ςђคภﻮє',
    options: [
      {
        text: 'Run',
        nextText: 78
      }
    ]
  },

  //LOOK AT ELENOR
  {
    id: 71,
    text: 'She is your wife. Your Elenor. The sword that rested in her hands is now in yours. Her eyes are wide, not in hatred, but in surprise. And..sorrow?',
    options: [
      {
        text: 'Look at the nymph',
        nextText: 72
      }
    ]
  },
  {
    id: 72,
    text: 'She holds inconceivable power; the will of this forest glows from inside her chest. You are filled with righteous anger. The sword burns in your hand.',
    options: [
      {
        text: 'Slay the nymph',
        nextText: 77
      },
      {
        text: 'Drop the sword',
        nextText: 73
      }
    ]
  },
  {
    id: 73,
    text: 'You...can\'t.',
    options: [
      {
        text: 'Slay the nymph',
        nextText: 77
      },
      {
        text: 'Drop the sword',
        nextText: 74
      }
    ]
  },
  {
    id: 74,
    text: 'You...can\'t.',
    options: [
      {
        text: 'Slay the nymph',
        nextText: 77
      },
      {
        text: 'Drop the sword',
        nextText: 75
      }
    ]
  },
  {
    id: 75,
    text: 'ş̵̬̰̬̥̰̫͍̍̑̾̚ľ̴̨̢̳̥̝͋̓̍̊̓̐͘a̸͍̼̦̘͔̟̼̮̥̻͐͒ỵ̴͚̤̬͕̝̦͋̒̄̈́̒̽̀̕̕̚ͅ ̶͙͉͚̞̝̟͋͒͂̊̅͝͝ͅt̵͉̯̫̀̾͜͝h̶̛̩̦̗̻̜̰̊̀ę̸̢̛̥̩̲̰̪̞̞̆̄̅͒͂̽̓̚ ̴̟̍͂̄̽̔͑̌̓͛n̴̛̝̹͝y̵̤̦̽͒͆͊m̶̧̞̀̉̎́͌̓́̏͠͝p̶̙̾͐̎̉h̴̡̧̗̙̘̦͕̱͋̆̑͒̋͗͑̍̋̚',
    options: [
      {
        text: 'ş̵̬̰̬̥̰̫͍̍̑̾̚ľ̴̨̢̳̥̝͋̓̍̊̓̐͘a̸͍̼̦̘͔̟̼̮̥̻͐͒ỵ̴͚̤̬͕̝̦͋̒̄̈́̒̽̀̕̕̚ͅ ̶͙͉͚̞̝̟͋͒͂̊̅͝͝ͅt̵͉̯̫̀̾͜͝h̶̛̩̦̗̻̜̰̊̀ę̸̢̛̥̩̲̰̪̞̞̆̄̅͒͂̽̓̚ ̴̟̍͂̄̽̔͑̌̓͛n̴̛̝̹͝y̵̤̦̽͒͆͊m̶̧̞̀̉̎́͌̓́̏͠͝p̶̙̾͐̎̉h̴̡̧̗̙̘̦͕̱͋̆̑͒̋͗͑̍̋̚',
        nextText: 77
      },
      {
        text: 'ş̵̬̰̬̥̰̫͍̍̑̾̚ľ̴̨̢̳̥̝͋̓̍̊̓̐͘a̸͍̼̦̘͔̟̼̮̥̻͐͒ỵ̴͚̤̬͕̝̦͋̒̄̈́̒̽̀̕̕̚ͅ ̶͙͉͚̞̝̟͋͒͂̊̅͝͝ͅt̵͉̯̫̀̾͜͝h̶̛̩̦̗̻̜̰̊̀ę̸̢̛̥̩̲̰̪̞̞̆̄̅͒͂̽̓̚ ̴̟̍͂̄̽̔͑̌̓͛n̴̛̝̹͝y̵̤̦̽͒͆͊m̶̧̞̀̉̎́͌̓́̏͠͝p̶̙̾͐̎̉h̴̡̧̗̙̘̦͕̱͋̆̑͒̋͗͑̍̋̚',
        nextText: 77
      },
      {
        text: 'ş̵̬̰̬̥̰̫͍̍̑̾̚ľ̴̨̢̳̥̝͋̓̍̊̓̐͘a̸͍̼̦̘͔̟̼̮̥̻͐͒ỵ̴͚̤̬͕̝̦͋̒̄̈́̒̽̀̕̕̚ͅ ̶͙͉͚̞̝̟͋͒͂̊̅͝͝ͅt̵͉̯̫̀̾͜͝h̶̛̩̦̗̻̜̰̊̀ę̸̢̛̥̩̲̰̪̞̞̆̄̅͒͂̽̓̚ ̴̟̍͂̄̽̔͑̌̓͛n̴̛̝̹͝y̵̤̦̽͒͆͊m̶̧̞̀̉̎́͌̓́̏͠͝p̶̙̾͐̎̉h̴̡̧̗̙̘̦͕̱͋̆̑͒̋͗͑̍̋̚',
        nextText: 77
      },
      {
        text: 'Drop the sword',
        nextText: 76
      }
    ]
  },
  {
    id: 76,
    text: 'You fall to your knees, the sword clattering to the ground beside you. It sizzles in the grass before falling silent.',
    options: [
      {
        text: 'Rest',
        nextText: 86
      }
    ]
  },
  //SLAY THE NYMPH
  {
    id: 77,
    text: 'The sword plunges into the glowing heart of the tree nymph. Her one eye glows a vivid red as it turns to look into yours. Around you, the trees alight in a ghastly flame.',
    options: [
      {
        text: 'Run.',
        nextText: 78
      }
    ]
  },
  //RUN AFTER FOREST FIRE
  {
    id: 78,
    text: 'You run. The fire licks at your heels, scarring your ankles as it obliterates the forest behind you. You keep running. The brambles melt away; the snake lies dead on the ground; the bog is silent.',
    options: [
      {
        text: 'Run',
        nextText: 79
      }
    ]
  },
  {
    id: 79,
    text: 'The air is hot and hard to breathe. For a moment you consider stopping to rest, to succumb to the fumes. But you see the exit. Just....just up ahead...',
    options: [
      {
        text: 'Run',
        nextText: 80
      }
    ]
  },
  {
    id: 80,
    text: 'The air is hot and hard to breathe. For a moment you consider stopping to rest, to succumb to the fumes. But you see the exit. Just....just up ahead...',
    options: [
      {
        text: 'Run',
        requiredState: (currentState) => currentState.ancients,
        nextText: 81
      },
      {
        text: 'Run',
        requiredState: (currentState) => currentState.guardian,
        nextText: 82
      },
      {
        text: 'Run',
        requiredState: (currentState) => currentState.fallen,
        nextText: 83
      },
      {
        text: 'Run',
        requiredState: (currentState) => currentState.elenor,
        nextText: 84
      }
    ]
  },
  {
    id: 81,
    text: 'You feel the souls of a thousand lives past releasing into the air as you leave the forest. Their pain leaves their faces as the roots that bind them burn into ash. As you leave the forest, you hear an echo of a familiar song.',
    options: [
      {
        text: 'End.',
        nextText: 85
      }
    ]
  },
  {
    id: 82,
    text: 'The fire tears away at the screaming brush as you leave it all behind. The wind has ceased its song...',
    options: [
      {
        text: 'End.',
        nextText: 85
      }
    ]
  },
  {
    id: 83,
    text: 'Another human soldier, fallen. You clasp the sword tightly in your palms as you feel its magic coarse through your veins. They were fools to trust us, and soon...soon they will be made to regret it.',
    options: [
      {
        text: 'End.',
        nextText: 85
      }
    ]
  },
  {
    id: 84,
    text: 'There is a sudden song that rings through the air, and freezes you in your step, only moments away from the exit. It is her, her voice, reverberating through the wood in a haunting melody. You cannot leave her. Your Elenor. Your Elenor. You cannot leave.',
    options: [
      {
        text: 'End.',
        nextText: 85
      }
    ]
  },
  {
    id: 86,
    text: '"My love, do not falter. You must remember yourself. Remember yourself..." You feel flashes of memory shoot like lightning through your fingertips.',
    options: [
      {
        text: 'Cut the vines.',
        nextText: 87
      }
    ]
  },
  {
    id: 87,
    text: '"Koa." You turn to the vine connecting the two figures, and grasp it between your hand. Your touch superheats the vine, and it explodes into a thousand fibers.',
    options: [
      {
        text: 'They were only memories',
        nextText: 88
      }
    ]
  },
  {
    id: 88,
    text: 'These were your memories. Are you going to let them go?',
    options: [
      {
        text: 'I cannot hold on forever.',
        nextText: 89
      }
    ]
  },
  {
    id: 89,
    text: 'Your world begins to fade.',
    options: [
      {
        text: 'I remember.',
        nextText: 90
      }
    ]
  },
  {
    id: 90,
    text: 'I remember this forest. We were married here. There was only the one tree, then.',
    options: [
      {
        text: 'We made this forest, didn\'t we?',
        nextText: 91
      }
    ]
  },
  {
    id: 91,
    text: 'It grew before our very eyes. Like magic. The love we had for each other was mirrored by the life of these woods.',
    options: [
      {
        text: 'You gave your life for it.',
        nextText: 92
      }
    ]
  },
  {
    id: 92,
    text: 'No, not your life. Just your memory.',
    options: [
      {
        text: 'My memory?',
        nextText: 93
      }
    ]
  },
  {
    id: 93,
    text: 'I am sorry, my love.',
    options: [
      {
        text: 'Elenor',
        nextText: 85
      }
    ]
  },

  //STAB THE SOLDIER
  {
    id: 94,
    text: 'Your sword finds purchase in the soldier\'s chest. The noise of the forest falls to silence, until there is...nothing. The soldier does not bleed. Her screams were frozen when the magic of this forest took her. There is no response.',
    options: [
      {
        text: 'Leave',
        nextText: 95
      }
    ]
  },
  {
    id: 95,
    text: 'You leave the forest, the sword left embedded in the heart of the soldier. You have nothing to show your people, and as such, receive no reward. Perhaps it is for the best.',
    options: [
      {
        text: 'End',
        nextText: 85
      }
    ]
  },

  //CUT THE VINES
  {
    id: 96,
    text: 'You raise the sword above your head and deftly swing it through the vines connecting the two beings. The wind quiets.',
    options: [
      {
        text: 'Break the sword',
        nextText: 64
      },
      {
        text: 'Stab the soldier',
        nextText: 94
      },
      {
        text: 'Stab the nymph',
        nextText: 77
      },
      {
        text: 'Listen',
        nextText: 97
      }
    ]
  },
  {
    id: 97,
    text: 'The air is calm, all except for the birdsong. It is familiar.',
    options: [
      {
        text: 'Break the sword',
        nextText: 64
      },
      {
        text: 'Stab the soldier',
        nextText: 94
      },
      {
        text: 'Stab the nymph',
        nextText: 77
      },
      {
        text: 'Leave the forest',
        nextText: 98
      }
    ]
  },
  {
    id: 98,
    text: 'You are left with an uncertainty as you leave the forest. Your people reward you for the retrieval of the sword, but there is something more that must be done. You find yourself unable to occupy your mind with much else.',
    options: [
      {
        text: 'End',
        nextText: 85
      }
    ]
  },

  //END
  {
    id: 85,
    text: 'You find yourself at the edge of a mysterious forest. Your task...to find the source of its magic, and retrieve an enchanted sword.',
    options: [
      {
        text: 'Begin your journey.',
        nextText: -1
      }
    ]
  },

]

startGame()
typeWriter()
