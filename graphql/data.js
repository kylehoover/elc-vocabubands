'use strict'

const data = {
  'lists': {
    'avl': [13, 14],
    'preavl': [1]
  },
  '13': {
    'id': 13,
    'data': [
      {
        'id': 1,
        'word': 'acceptance.n',
        'support_words': ' belief; approval; ',
        'definition': 'the act of recieving something ',
        'building_words': 'adoption; tolerance; credence; acquiescence; '
      },
      {
        'id': 2,
        'word': 'accurate.j',
        'support_words': 'perfect; ',
        'definition': 'able to produce results that are correct; not making mistakes',
        'building_words': 'precise; authentic; rigorous; factual; factual'
      },
      {
        'id': 3,
        'word': 'adapt.v',
        'support_words': 'vary; adjust; fit; ',
        'definition': 'to change something so that it functions better or is better suited for a purpose',
        'building_words': 'modify; orient; conform; assimilate; tailor; attune; modulate'
      },
      {
        'id': 4,
        'word': 'adequate.j',
        'support_words': '',
        'definition': 'enough for some requirement; good enough; ',
        'building_words': 'acceptable; satisfactory; commensurate'
      },
      {
        'id': 5,
        'word': 'advance.v',
        'support_words': 'improve; enhance; expand; ',
        'definition': ' to move forward',
        'building_words': 'foster; progress; posit; precipitate; postulate; further; '
      },
      {
        'id': 6,
        'word': 'alter.v',
        'support_words': ' vary; adjust; ',
        'definition': 'to change something;',
        'building_words': 'convert; modify; revise; distort; tailor; reorganize; fluctuate; modulate; '
      },
      {
        'id': 7,
        'word': 'assembly.n',
        'support_words': 'association; community; construction; ',
        'definition': 'the act of connecting together the parts of something; a group of people',
        'building_words': 'forum; multitude; manufacture'
      },
      {
        'id': 8,
        'word': 'attribute.v',
        'support_words': '',
        'definition': 'to say that something is because of something; to think of something as being a quality of something',
        'building_words': 'ascribe; impute'
      },
      {
        'id': 9,
        'word': 'collective.j',
        'support_words': 'joint; ',
        'definition': 'done by a group of people; involving all members of a group',
        'building_words': 'shared; combined; societal; cumulative; aggregate'
      },
      {
        'id': 10,
        'word': 'communicate.v',
        'support_words': 'reveal; link; connect; speak; write; ',
        'definition': 'to give information about something to someone; to get someone to understand your feelings',
        'building_words': 'correspond; convey; articulate; formulate; transmit; impart; interconnect'
      },
      {
        'id': 11,
        'word': 'detailed.j',
        'support_words': ' comprehensive; complete; ',
        'definition': 'including a lot of information',
        'building_words': 'precise; thorough; '
      },
      {
        'id': 12,
        'word': 'encounter.v',
        'support_words': '',
        'definition': 'to have or experience difficulties; to meet someone ',
        'building_words': 'sustain; incur; '
      },
      {
        'id': 13,
        'word': 'exclude.v',
        'support_words': 'prevent; ',
        'definition': 'to prevent someone from doing something; to leave out something; ',
        'building_words': 'preclude; proscribe; disallow'
      },
      {
        'id': 14,
        'word': 'exhibit.v',
        'support_words': 'reveal; demonstrate; display; expose; ',
        'definition': 'to make something available for people to see; to reveal',
        'building_words': 'model; manifest; '
      },
      {
        'id': 15,
        'word': 'guideline.n',
        'support_words': ' standard; recommendation; regulation; rule; ',
        'definition': 'an instruction that tells how something should be done',
        'building_words': 'precept; bylaw; '
      },
      {
        'id': 16,
        'word': 'ideal.j',
        'support_words': ' perfect; ultimate; ',
        'definition': 'exactly right for a particular purpose;  perfect',
        'building_words': 'optimal; preferred; '
      },
      {
        'id': 17,
        'word': 'initiate.v',
        'support_words': ' start; train; ',
        'definition': 'to start or begin something',
        'building_words': 'originate; activate; instigate'
      },
      {
        'id': 18,
        'word': 'intention.n',
        'support_words': ' goal; purpose; objective; target; ',
        'definition': 'the thing that you plan to do or achieve; an aim or purpose',
        'building_words': 'aim; calculation; '
      },
      {
        'id': 19,
        'word': 'justify.v',
        'support_words': ' support; defend; ',
        'definition': 'to be a good reason for something; to prove something to be right',
        'building_words': 'fulfill; validate; rationalize; '
      },
      {
        'id': 20,
        'word': 'mutual.j',
        'support_words': 'joint; ',
        'definition': 'shared by two or more people or groups',
        'building_words': 'shared; combined; reciprocal; concerted; '
      },
      {
        'id': 21,
        'word': 'ongoing.j',
        'support_words': 'constant; ',
        'definition': 'continuing to happen; continuing without reaching an end',
        'building_words': 'progressive; continuing; gradual; habitual; existent'
      },
      {
        'id': 22,
        'word': 'rapid.j',
        'support_words': '',
        'definition': 'happening in a short amount of time; happening quickly',
        'building_words': 'instantaneous; prompt; cursory'
      },
      {
        'id': 23,
        'word': 'rapidly.r',
        'support_words': '',
        'definition': 'having a fast rate; moving quickly',
        'building_words': 'superficially; summarily; '
      },
      {
        'id': 24,
        'word': 'reinforce.v',
        'support_words': '',
        'definition': 'to strengthen something by adding to it; to give support to something.',
        'building_words': 'strengthen; heighten; underpin; formalize; regenerate; buttress; '
      },
      {
        'id': 25,
        'word': 'stable.j',
        'support_words': 'constant; ',
        'definition': 'in a good state that is not easily changed; not easily moved; calm and reasonable',
        'building_words': 'fixed; enduring; '
      },
      {
        'id': 26,
        'word': 'strengthen.v',
        'support_words': 'reinforce; ',
        'definition': 'to make something stronger, more forceful, more effective, etc.',
        'building_words': 'consolidate amplify; underpin; buttress; '
      },
      {
        'id': 27,
        'word': 'stress.v',
        'support_words': '',
        'definition': 'to give special attention to something; ',
        'building_words': 'highlight; underscore; underline; accentuate; '
      },
      {
        'id': 28,
        'word': 'sustain.v',
        'support_words': 'bear; support; maintain; maintain; experience;  ',
        'definition': 'to provide what is needed for someone to exist, continue, etc.; to hold up the weight of something',
        'building_words': 'aid; incur; conserve'
      },
      {
        'id': 29,
        'word': 'valuable.j',
        'support_words': ' effective; useful; ',
        'definition': 'worth a lot of money; very useful or helpful; ',
        'building_words': 'helpful; productive; beneficial; invaluable; advantageous; salutary; '
      }
    ]
  },
  '14': {
    id: 14,
    data: [
      {
        'id': 1,
        'word': 'acceptable.j',
        'support_words': 'adequate; ',
        'definition': 'capable or worthy of being accepted',
        'building_words': 'valid; plausible; satisfactory; justified; justifiable'
      },
      {
        'id': 2,
        'word': 'accuracy.n',
        'support_words': '',
        'definition': 'freedom from mistake or error; ability to work without making mistakes',
        'building_words': 'precision; rigor; veracity; soundness; '
      },
      {
        'id': 3,
        'word': 'bias.n',
        'support_words': '',
        'definition': 'a strong interest in something, a tendency to believe that some X are better than others',
        'building_words': 'distortion; inequity; predisposition; preconception; '
      },
      {
        'id': 4,
        'word': 'commonly.r',
        'support_words': 'generally; normally; regularly; ',
        'definition': 'done by many people; occurring or appearing frequently',
        'building_words': 'mutually;  universally;  conventionally;  popularly; '
      },
      {
        'id': 5,
        'word': 'constraint.n',
        'support_words': 'limitation; limit; ',
        'definition': 'something that limits or restricts X',
        'building_words': 'parameter;  exigency;  stricture'
      },
      {
        'id': 6,
        'word': 'convert.v',
        'support_words': 'transform; alter; transfer; translate; ',
        'definition': 'to change X into a different form to be used in a different way',
        'building_words': 'tailor;  encode; '
      },
      {
        'id': 7,
        'word': 'discrimination.n',
        'support_words': 'contrast; insight; distinction; ',
        'definition': 'the practice of unfairly treating a person or group differently from others; the ability to recognize difference',
        'building_words': 'inequality;  differentiation;  demarcation'
      },
      {
        'id': 8,
        'word': 'distribute.v',
        'support_words': 'spread; ',
        'definition': 'to give or deliver something; to divide among members of a group',
        'building_words': 'export;  export;  allocate;  disseminate;  diffuse'
      },
      {
        'id': 9,
        'word': 'efficient.j',
        'support_words': 'effective; professional; ',
        'definition': 'capable of producing desired results without wasting materials, time, or energy',
        'building_words': 'functional;  systematic;  ordered'
      },
      {
        'id': 10,
        'word': 'evident.j',
        'support_words': 'apparent; distinct; obvious; ',
        'definition': 'clear to the sight or mind',
        'building_words': 'marked;  tangible;  overt;  noticeable;  conspicuous;  observable;  discernible;  distinguishable;  demonstrable'
      },
      {
        'id': 11,
        'word': 'extension.n',
        'support_words': '',
        'definition': 'the act of making something longer or greater',
        'building_words': 'continuation;  enlargement;  intensification;  outgrowth;  perpetuation;  maximization; '
      },
      {
        'id': 12,
        'word': 'frequent.j',
        'support_words': 'numerous; normal; regular; ',
        'definition': 'happening often',
        'building_words': 'repeated; prevalent;  continual'
      },
      {
        'id': 13,
        'word': 'functional.j',
        'support_words': '',
        'definition': 'designed to have a practical use, working properly, relating to the use or function of X',
        'building_words': 'applied; usable; anatomical;  utilitarian; '
      },
      {
        'id': 14,
        'word': 'greatly.r',
        'support_words': '',
        'definition': 'to a great extent or degree',
        'building_words': 'substantially;  considerably;  extensively;  profoundly;  materially;  maximally; '
      },
      {
        'id': 15,
        'word': 'helpful.j',
        'support_words': 'useful; valuable; ',
        'definition': 'making it easier to do a job, deal with a problem, etc.�:�giving help',
        'building_words': 'productive;  beneficial;  constructive;  informative;  instructive;  invaluable;  advantageous;  illuminating;  salutary'
      },
      {
        'id': 16,
        'word': 'innovation.n',
        'support_words': '',
        'definition': 'the act or process of introducing new ideas, devices, or methods.',
        'building_words': 'invention; advancement; '
      },
      {
        'id': 17,
        'word': 'logic.n',
        'support_words': 'sense; ',
        'definition': 'the science that studies the formal processes of thinking and reasoning; a proper or reasonable way of thinking',
        'building_words': 'rationale; rationality; coherence'
      },
      {
        'id': 18,
        'word': 'mainly.r',
        'support_words': 'primarily; essentially; mostly; ',
        'definition': 'most important',
        'building_words': 'predominantly; principally; chiefly'
      },
      {
        'id': 19,
        'word': 'maintenance.n',
        'support_words': 'conservation; ',
        'definition': 'the act of maintaining X',
        'building_words': 'preservation; livelihood; '
      },
      {
        'id': 20,
        'word': 'motivate.v',
        'support_words': 'influence; cause; inspire; prompt; ',
        'definition': 'to give someone a reason for doing something; to be a reason for something',
        'building_words': 'stimulate; underlie; activate;  occasion; '
      },
      {
        'id': 21,
        'word': 'obligation.n',
        'support_words': 'understanding;  requirement;  commitment;  commitment; ',
        'definition': 'something that you must do because of a law, rule, promise, etc.; something you must do because it is morally right',
        'building_words': 'necessity; appreciation; imperative;  compulsion; '
      },
      {
        'id': 22,
        'word': 'principal.j',
        'support_words': 'basic; primary;  fundamental; main; ',
        'definition': 'most important',
        'building_words': 'underlying; prevailing; focal; predominant; paramount;  overarching; overriding; cardinal; '
      },
      {
        'id': 23,
        'word': 'prominent.j',
        'support_words': 'famous; major; ',
        'definition': 'important and well-known; easily noticed or seen',
        'building_words': 'influential; notable; salient; marked; conspicuous; eminent; '
      },
      {
        'id': 24,
        'word': 'proposed.j',
        'support_words': '',
        'definition': 'to suggest (always used before a noun)',
        'building_words': 'hypothetical; projected; intended'
      },
      {
        'id': 25,
        'word': 'radical.j',
        'support_words': 'essential; fundamental; ',
        'definition': 'very new and different from what is traditional or ordinary; having extreme political or social views',
        'building_words': 'progressive; revolutionary; '
      },
      {
        'id': 26,
        'word': 'restrict.v',
        'support_words': 'contain; control; limit;  origin; formation; ',
        'definition': 'to limit or prevent something',
        'building_words': 'stem; confine; constrain; circumscribe; delimit'
      },
      {
        'id': 27,
        'word': 'restriction.n',
        'support_words': 'limitation; check; limit; ',
        'definition': 'a law or rule that limits or controls; the act of limiting or controlling',
        'building_words': 'parameter; rigor; taboo; stricture; '
      },
      {
        'id': 28,
        'word': 'vital.j',
        'support_words': 'central; necessary; critical; essential; fundamental; crucial; ',
        'definition': 'extremely important: crucial; needed by your body in order to keep living; very lively or energetic',
        'building_words': 'required; integral; decisive; indispensable; imperative; paramount; invaluable; requisite; '
      },
      {
        'id': 29,
        'word': 'widespread.j',
        'support_words': 'general; extensive; ',
        'definition': 'common over a wide area or among many people',
        'building_words': 'prevalent; prevailing; pervasive; endemic; '
      }
    ]
  }
}

module.exports = data
