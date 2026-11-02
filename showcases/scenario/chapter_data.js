const ASSETS = {
  dormNight: "assets/scenes/dorm_night.webp",
  dormDay: "assets/scenes/dorm_day.webp",
  counseling: "assets/scenes/counseling_room.webp",
  library: "assets/scenes/library_study_area.webp",
  xiaoye: "assets/characters/xiaoye_default_half.webp",
  xiaoyeTired: "assets/characters/xiaoye_tired_half.webp",
  xiaoyeWorried: "assets/characters/xiaoye_worried_half.webp",
  xiaoyeThinking: "assets/characters/xiaoye_thinking_half.webp",
  xiaoyeNervous: "assets/characters/xiaoye_speak_nervous_half.webp",
  xiaoyeSad: "assets/characters/xiaoye_sad_half.webp",
  xiaoyeEmbarrassed: "assets/characters/xiaoye_embarrassed_half.webp",
  xiaoou: "assets/characters/xiaoou_default_half.webp",
  xiaoouPhone: "assets/characters/xiaoou_phone_half.webp",
  xiaoouApologetic: "assets/characters/xiaoou_apologetic_half.webp",
  xiaoouConcerned: "assets/characters/xiaoou_concerned_half.webp",
  xiaoouInvite: "assets/characters/xiaoou_invite_half.webp",
  wang: "assets/characters/wangteacher_default_half.webp",
  wangPoint: "assets/characters/wangteacher_point_half.webp"
};

const PROJECT_TITLE = "擦亮心灵的窗户";

const SPEAKER_COLORS = {
  "小叶": "#315b8f",
  "小叶内心": "#6c5b7b",
  "小欧": "#d1872d",
  "小欧（电话中）": "#d1872d",
  "王老师": "#197c84",
  "旁白": "#197c84"
};

const nodes = [
  {
    "id": "cover",
    "type": "cover",
    "bg": "assets/scenes/dorm_night.webp",
    "title": "擦亮心灵的窗户",
    "subtitleTitle": "——大学生的情绪及其管理",
    "subtitle": "考试前夜，宿舍里的一通电话点燃了小叶的情绪。她的烦躁到底来自声音，还是来自她对这件事的解释？",
    "people": [
      "assets/characters/xiaoye_default_half.webp",
      "assets/characters/xiaoou_default_half.webp"
    ],
    "next": "t1"
  },
  {
    "id": "t1",
    "type": "intertitle",
    "title": "第一幕",
    "subtitle": "宿舍｜考试前夜",
    "bg": "assets/scenes/dorm_night.webp",
    "next": "n1"
  },
  {
    "id": "n1",
    "type": "dialogue",
    "bg": "assets/scenes/dorm_night.webp",
    "speaker": "小叶",
    "text": "明天上午就考试了，我还有两章没看完。现在谁跟我说话，我可能都会炸。",
    "chars": [
      {
        "id": "xiaoye",
        "pose": "tired",
        "active": true
      }
    ],
    "next": "n2"
  },
  {
    "id": "n2",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "我尽量不打扰你。我就回几条项目群消息。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "default",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "tired"
      }
    ],
    "next": "n3"
  },
  {
    "id": "n3",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "你回吧。我现在只想把重点背完，不然我今晚真的睡不着。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "tired",
        "active": true
      }
    ],
    "next": "n4"
  },
  {
    "id": "n4",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "我已经把这页看了三遍，可每一行都像刚从眼睛里滑过去。我越想抓住它，它越不像知识点，像一堆散开的字。",
    "chars": [
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "n5"
  },
  {
    "id": "n5",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "小叶，我接个电话，应该很快。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "tired"
      }
    ],
    "next": "n6"
  },
  {
    "id": "n6",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "嗯，快一点就行。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "tired",
        "active": true
      }
    ],
    "next": "n7"
  },
  {
    "id": "n7",
    "type": "dialogue",
    "speaker": "小欧（电话中）",
    "text": "真的？我们项目获奖了？太好了！我还以为这次没希望了！",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "worried"
      }
    ],
    "next": "n8"
  },
  {
    "id": "n8",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "她声音一下子亮起来了。我知道她不是故意的，我也知道这是好事。可我现在听到每一个字，都像有人在我脑子旁边敲桌子。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "n9"
  },
  {
    "id": "n9",
    "type": "dialogue",
    "speaker": "小欧（电话中）",
    "text": "对，对，小李那段路演真的帮了大忙。我们后来把“为什么这个项目和人有关”讲清楚了。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "worried"
      }
    ],
    "next": "n10"
  },
  {
    "id": "n10",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "她还在说。她明明知道我明天考试。她明明知道我今晚很急。为什么她现在还能这么开心？",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "n11"
  },
  {
    "id": "n11",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "小欧，你能小声一点吗？",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "nervous",
        "active": true
      }
    ],
    "next": "n12"
  },
  {
    "id": "n12",
    "type": "dialogue",
    "speaker": "小欧（电话中）",
    "text": "嗯？等一下。抱歉，我室友在复习，我小声一点。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "worried"
      }
    ],
    "next": "n13"
  },
  {
    "id": "n13",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "她确实小声了，可我还是听得见。我现在不是在复习，是在等她什么时候挂电话。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "n13b"
  },
  {
    "id": "n13b",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "越等越烦，越烦越觉得她根本没把我的考试当回事。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "op1"
  },
  {
    "id": "op1",
    "type": "choice",
    "bg": "assets/scenes/dorm_night.webp",
    "prompt": "小叶第一次烦躁时怎么表达？",
    "chars": [
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "options": [
      {
        "label": "你没看到我在复习吗？能不能别这么大声！",
        "feedback": "你把需求说出来了，但指责语气会让冲突马上升温。",
        "next": "op1_a"
      },
      {
        "label": "小欧，我现在有点急，可以稍微小声一点吗？",
        "feedback": "你表达了需求，也给对方留下了回应空间。",
        "next": "op1_b"
      },
      {
        "label": "不说话，故意把书摔得很响。",
        "feedback": "你希望对方自己发现，但暗示不一定会被正确理解。",
        "next": "op1_c"
      }
    ]
  },
  {
    "id": "op1_a",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "你没看到我在复习吗？能不能别这么大声！我现在真的一个字都看不进去。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "nervous",
        "active": true
      }
    ],
    "next": "op1_a2"
  },
  {
    "id": "op1_a2",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "我知道你在复习，所以我刚才已经压低声音了。你可以提醒我，但你这样说，我会觉得自己像做了什么特别过分的事。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "worried"
      }
    ],
    "next": "n14"
  },
  {
    "id": "op1_b",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "小欧，我现在有点急。你能稍微小声一点吗？我怕我再听下去会越来越烦。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "nervous",
        "active": true
      }
    ],
    "next": "op1_b2"
  },
  {
    "id": "op1_b2",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "好，我知道了。我把电话拿到阳台边，尽量快点结束。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "worried"
      }
    ],
    "next": "n14"
  },
  {
    "id": "op1_c",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "我不想开口吵架，可我就是希望她能发现我已经受不了了。我把书页翻得越来越响，笔也被我按得咔咔响。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "op1_c2"
  },
  {
    "id": "op1_c2",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "小叶，你是不是有点烦？你直接说可以吗？我现在听电话，也猜不到你到底需要什么。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "concerned",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "worried"
      }
    ],
    "next": "n14"
  },
  {
    "id": "n14",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "抱歉，我小声一点。这个电话快结束了。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "worried"
      }
    ],
    "next": "n15"
  },
  {
    "id": "n15",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "她说会小声，可我还是听得见。我开始盯着她每一句话，像在收集证据：你看，她又笑了；你看，她又忘了我明天考试。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic"
      },
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "n16"
  },
  {
    "id": "n16",
    "type": "dialogue",
    "speaker": "小欧（电话中）",
    "text": "好，那明天再细聊。嗯嗯，辛苦大家了。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "worried"
      }
    ],
    "next": "n17"
  },
  {
    "id": "n17",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我真的受不了了。小欧，你只顾自己开心，完全不管我明天考试吗？",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "concerned"
      },
      {
        "id": "xiaoye",
        "pose": "nervous",
        "active": true
      }
    ],
    "next": "n18"
  },
  {
    "id": "n18",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "小叶，我知道我吵到你了，我道歉。但你这句话让我很难受。我不是故意不管你，我只是刚听到结果太激动了。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "sad"
      }
    ],
    "next": "n19"
  },
  {
    "id": "n19",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "可你明明知道我在复习。我现在就是觉得你不在乎我。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic"
      },
      {
        "id": "xiaoye",
        "pose": "sad",
        "active": true
      }
    ],
    "next": "n20"
  },
  {
    "id": "n20",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "那我们先停一下吧。再说下去，可能谁都听不见谁。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "concerned",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "sad"
      }
    ],
    "next": "n21"
  },
  {
    "id": "n21",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "我想继续争下去，想证明她确实不对。可她那句“谁都听不见谁”一直在我脑子里转。",
    "chars": [
      {
        "id": "xiaoye",
        "pose": "sad",
        "active": true
      }
    ],
    "next": "n21b"
  },
  {
    "id": "n21b",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "我突然分不清，我是在气电话声，还是在气自己快要复习不完。",
    "chars": [
      {
        "id": "xiaoye",
        "pose": "sad",
        "active": true
      }
    ],
    "next": "t2"
  },
  {
    "id": "t2",
    "type": "intertitle",
    "title": "第二幕",
    "subtitle": "咨询室｜第二天",
    "bg": "assets/scenes/counseling_room.webp",
    "next": "n22"
  },
  {
    "id": "n22",
    "type": "dialogue",
    "bg": "assets/scenes/counseling_room.webp",
    "speaker": "王老师",
    "text": "你说自己因为室友电话爆发了。我们先不急着评判谁对谁错，先把过程慢一点放出来。发生了什么？",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "sad"
      }
    ],
    "next": "n23"
  },
  {
    "id": "n23",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "她在宿舍接获奖电话，声音有点大。第二天考试，那时很急。我提醒过她，她也小声了，可我还是越来越烦。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "sad",
        "active": true
      }
    ],
    "next": "n23b"
  },
  {
    "id": "n23b",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "最后我说她只顾自己开心，完全不管我。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "sad",
        "active": true
      }
    ],
    "next": "n24"
  },
  {
    "id": "n24",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "你现在回看这句话，觉得它准确吗？",
    "chars": [
      {
        "id": "wang",
        "pose": "default",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n25"
  },
  {
    "id": "n25",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "不完全准确。她不是完全不管我。她接电话时确实激动，但我提醒以后，她有压低声音。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n25b"
  },
  {
    "id": "n25b",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "可是当时我脑子里只剩下一个想法：她明明知道我明天考试，还能这么开心。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n26"
  },
  {
    "id": "n26",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "这个“只剩下一个想法”很关键。情绪被点燃时，我们常常以为自己看到的是事实，其实很多时候看到的是解释。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n27"
  },
  {
    "id": "n27",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我当时觉得电话声让我爆发。可现在想，电话声只是开始，后面是我一直在解释她的行为。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n28"
  },
  {
    "id": "n28",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "这正好可以用情绪 ABC 理论来看。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "k1"
  },
  {
    "id": "k1",
    "type": "knowledge",
    "bg": "assets/scenes/counseling_room.webp",
    "title": "情绪ABC理论",
    "copy": "情绪调节ABC理论是由美国心理学家艾尔伯特·埃利斯提出来的。我们说情绪本身并不是由诱发事件A（activating event）引起的，A只是引发情绪和行为后果C（consequence）的间接原因。而引起C的直接原因则是个体对激发事件A的认知和评价而产生的信念B（belief）。",
    "dialogueKey": "k1_dialogue",
    "dialogueSpeaker": "王老师",
    "dialogueText": "电话声确实影响了你，考试压力也是真的。但让愤怒不断升高的，是你对这件事的解释。",
    "items": [
      {
        "key": "A 诱发事件",
        "value": "小欧在宿舍接获奖电话，声音较大。"
      },
      {
        "key": "B 信念评价",
        "value": "她不该影响我；她不在乎我；她不尊重我。"
      },
      {
        "key": "C 情绪行为",
        "value": "愤怒、指责、关系紧张。"
      }
    ],
    "next": "n29"
  },
  {
    "id": "n29",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "所以 A 是小欧接电话，C 是我愤怒、指责、关系紧张。中间的 B 是我觉得她不尊重我，不在乎我。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n30"
  },
  {
    "id": "n30",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "是的。我们不是说 A 不重要，而是说让情绪不断升级的，往往是你对 A 的解释。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n31"
  },
  {
    "id": "n31",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "这和之前聊过的社会认知有点像。我看到的不是完整的小欧，而是“正在影响我复习的小欧”。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n32"
  },
  {
    "id": "n32",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "很好。情绪管理不是把情绪删掉，而是看见情绪怎样改变了我们对事件和他人的解释。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "t3"
  },
  {
    "id": "t3",
    "type": "intertitle",
    "title": "第三幕",
    "subtitle": "心理健康课堂｜ABC练习",
    "bg": "assets/scenes/counseling_room.webp",
    "next": "n33"
  },
  {
    "id": "n33",
    "type": "dialogue",
    "bg": "assets/scenes/counseling_room.webp",
    "speaker": "王老师",
    "text": "今天我们做一个练习。请大家把一次情绪波动拆成 A、B、C。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n33b"
  },
  {
    "id": "n33b",
    "type": "dialogue",
    "bg": "assets/scenes/counseling_room.webp",
    "speaker": "王老师",
    "text": "A 是发生了什么，B 是我怎样解释它，C 是我产生了什么情绪和行为。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n34"
  },
  {
    "id": "n34",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "老师，如果我写出来的 B 很不好看怎么办？比如“她就是自私”“她根本不在乎我”。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "n35"
  },
  {
    "id": "n35",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "那正说明它值得被看见。写下 B 不是为了批判自己，而是为了让它从脑子里的唯一答案，变成一个可以被检查的想法。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n36"
  },
  {
    "id": "n36",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我以前会直接检查情绪，比如“我不该生气”。现在听起来，更重要的是检查生气背后的解释。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n37"
  },
  {
    "id": "n37",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "对。压下去不等于管理，否定情绪也不等于理性。新的 B 不是强迫自己往好处想，而是更贴近事实，也更有行动空间。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "op2"
  },
  {
    "id": "op2",
    "type": "choice",
    "bg": "assets/scenes/counseling_room.webp",
    "prompt": "小叶可以尝试哪种新的 B 信念？",
    "chars": [
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "options": [
      {
        "label": "宿舍也是生活空间，我可以表达需求，也可以换地方复习。",
        "feedback": "这个解释保留了你的需要，也给行动留下空间。",
        "next": "op2_a"
      },
      {
        "label": "她就是自私，不尊重我。",
        "feedback": "这个解释会继续强化愤怒，让你更难听见对方。",
        "next": "op2_b"
      },
      {
        "label": "都是我的错，我不该有情绪。",
        "feedback": "压抑不是管理情绪。情绪需要被理解，而不是被否定。",
        "next": "op2_c"
      }
    ]
  },
  {
    "id": "op2_a",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我可以先承认自己需要安静，也承认她有开心的理由。这样想的时候，我没有那么想立刻责怪她。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "op2_a2"
  },
  {
    "id": "op2_a2",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "这个 B 比较有弹性。它没有否认你的需要，也没有取消对方的感受。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n38"
  },
  {
    "id": "op2_b",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "如果我坚持“她就是自私，不尊重我”，我会觉得自己的愤怒很有道理。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "sad",
        "active": true
      }
    ],
    "next": "op2_b2"
  },
  {
    "id": "op2_b2",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "是的，这个解释会给愤怒加燃料。它可能让你短时间觉得有力量，但也会让你更难听见对方。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "sad"
      }
    ],
    "next": "n38"
  },
  {
    "id": "op2_c",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我也会反过来想，都是我的错，我不该有情绪。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "op2_c2"
  },
  {
    "id": "op2_c2",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "这不是情绪管理，而是情绪否定。有情绪不等于你做错了。你要练习的是把“我很焦虑”和“我要怎么表达”分开。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n38"
  },
  {
    "id": "n38",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "情绪是信号，不是命令。信号提醒你：这里有需要、有压力、有边界。但它不一定能直接告诉你最合适的行动。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "k2"
  },
  {
    "id": "k2",
    "type": "knowledge",
    "bg": "assets/scenes/counseling_room.webp",
    "title": "情绪管理：觉察、接纳与调节",
    "copy": "教材指出，情绪是人对客观事物是否符合自身需要而产生的态度体验。情绪管理不是否认情绪，而是在认识情绪特点的基础上，及时、恰当地表达、疏导和调节。",
    "dialogueKey": "k2_dialogue",
    "dialogueSpeaker": "王老师",
    "dialogueText": "你可以有情绪，但不让情绪替你说最伤人的话。",
    "items": [
      {
        "key": "觉察需要",
        "value": "电话声影响复习，背后也有对考试结果的担心。"
      },
      {
        "key": "接纳情绪",
        "value": "焦虑、烦躁和愤怒可以被看见，不必用否认压下去。"
      },
      {
        "key": "恰当表达",
        "value": "把请求说清楚，而不是让情绪替自己说最伤人的话。"
      }
    ],
    "next": "n39"
  },
  {
    "id": "n39",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我想回去跟小欧说清楚。我不想让一次电话，变成我们之间一直绕不开的刺。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n40"
  },
  {
    "id": "n40",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "你可以从事实、感受、需要和请求四个部分开始。这样说，比“你完全不管我”清楚多了。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "t4"
  },
  {
    "id": "t4",
    "type": "intertitle",
    "title": "第四幕",
    "subtitle": "宿舍｜几天后",
    "bg": "assets/scenes/dorm_day.webp",
    "next": "n41"
  },
  {
    "id": "n41",
    "type": "dialogue",
    "bg": "assets/scenes/dorm_day.webp",
    "speaker": "小欧",
    "text": "小叶，我接个电话，可能还是项目那边。他们要确认领奖材料。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n42"
  },
  {
    "id": "n42",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "又是电话。我胸口一下子紧了。不是因为她已经做错了什么，而是因为上一次的感觉被重新叫醒了。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "n43"
  },
  {
    "id": "n43",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "我可以听见那个旧解释冒出来：她又要影响我了，她又只顾自己了。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "n44"
  },
  {
    "id": "n44",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "我去阳台说？还是你现在不复习？",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n45"
  },
  {
    "id": "n45",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "她这次先问了。事实和上次不一样，可我的身体反应还是先到了。我不能假装自己完全不烦，也不能把旧火直接泼到这次电话上。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "op3"
  },
  {
    "id": "op3",
    "type": "choice",
    "bg": "assets/scenes/dorm_day.webp",
    "prompt": "相似情境再次出现，小叶如何行动？",
    "chars": [
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "options": [
      {
        "label": "小欧，我去图书馆复习。你慢慢说，回来我们再聊。",
        "feedback": "你照顾了自己的需要，也没有把对方推到对立面。",
        "next": "op3_a"
      },
      {
        "label": "继续忍着不说。",
        "feedback": "表面和平，但压力可能继续累积。",
        "next": "op3_b"
      },
      {
        "label": "立刻翻旧账。",
        "feedback": "旧冲突会被重新点燃，问题很难向前走。",
        "next": "op3_c"
      }
    ]
  },
  {
    "id": "op3_a",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "小欧，我去图书馆复习。你慢慢说，回来我们再聊。这样我能安静复习，也不用把你的开心变成我的压力。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "phone"
      },
      {
        "id": "xiaoye",
        "pose": "nervous",
        "active": true
      }
    ],
    "next": "n46"
  },
  {
    "id": "op3_b",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "我刚想说算了，可胸口一下子更紧。继续忍着看起来和平，其实是在把压力继续往里压。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "concerned"
      },
      {
        "id": "xiaoye",
        "pose": "worried",
        "active": true
      }
    ],
    "next": "op3_b2"
  },
  {
    "id": "op3_b2",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "小欧，我还是说一下。我现在需要安静，我去图书馆复习，回来再聊。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "concerned"
      },
      {
        "id": "xiaoye",
        "pose": "nervous",
        "active": true
      }
    ],
    "next": "n46"
  },
  {
    "id": "op3_c",
    "type": "dialogue",
    "speaker": "小叶内心",
    "text": "我差点想说“你上次也是这样”。可我现在要处理的是这通电话，不是把上次的火重新点起来。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "concerned"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "op3_c2"
  },
  {
    "id": "op3_c2",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "小欧，我去图书馆复习。你先接电话，回来我们再把上次的事说完。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "concerned"
      },
      {
        "id": "xiaoye",
        "pose": "nervous",
        "active": true
      }
    ],
    "next": "n46"
  },
  {
    "id": "n46",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "好。上次我确实只顾着接电话，没有注意到你在复习。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "embarrassed"
      }
    ],
    "next": "n46b"
  },
  {
    "id": "n46b",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "后来想想，我听见你说“你完全不管我”的时候，也很委屈，所以我没有继续解释。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "embarrassed"
      }
    ],
    "next": "n47"
  },
  {
    "id": "n47",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我想跟你说清楚。那天我真的很焦虑，觉得自己复习不完，所以电话声一出来，我就把它解释成“你不在乎我”。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic"
      },
      {
        "id": "xiaoye",
        "pose": "embarrassed",
        "active": true
      }
    ],
    "next": "n47b"
  },
  {
    "id": "n47b",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "现在想想，这个解释太重了。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic"
      },
      {
        "id": "xiaoye",
        "pose": "embarrassed",
        "active": true
      }
    ],
    "next": "n48"
  },
  {
    "id": "n48",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "我不是不在乎你。我当时是太高兴了，也没处理好空间问题。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n49"
  },
  {
    "id": "n49",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我知道。你可以高兴，我也可以需要安静。以后如果你要接比较长的电话，能不能提前说一声？",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n49b"
  },
  {
    "id": "n49b",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我也会直接告诉你我要不要去图书馆，不再让你猜。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "apologetic"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n50"
  },
  {
    "id": "n50",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "可以。那我们算和好了？",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "invite",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "default"
      }
    ],
    "next": "n51"
  },
  {
    "id": "n51",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "算。只是我以后可能还是会焦虑，但我会先说清楚，不再让情绪替我说话。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "invite"
      },
      {
        "id": "xiaoye",
        "pose": "default",
        "active": true
      }
    ],
    "next": "n52"
  },
  {
    "id": "n52",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "那你去图书馆吧。回来我给你留一杯热水，还有，我们项目获奖这件事，我也想等你复习完再好好跟你讲。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "invite",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "default"
      }
    ],
    "next": "n53"
  },
  {
    "id": "n53",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "好。到时候我会认真听，不把你的开心当成我的敌人。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "invite"
      },
      {
        "id": "xiaoye",
        "pose": "default",
        "active": true
      }
    ],
    "next": "t5"
  },
  {
    "id": "t5",
    "type": "intertitle",
    "title": "第五幕",
    "subtitle": "心理健康课堂｜现场回顾",
    "bg": "assets/scenes/counseling_room.webp",
    "next": "n54"
  },
  {
    "id": "n54",
    "type": "dialogue",
    "bg": "assets/scenes/counseling_room.webp",
    "speaker": "王老师",
    "text": "今天我们回到这个比喻：擦亮心灵的窗户。情绪就像窗户上的雾气，它不是坏东西，",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n54b"
  },
  {
    "id": "n54b",
    "type": "dialogue",
    "bg": "assets/scenes/counseling_room.webp",
    "speaker": "王老师",
    "text": "但如果我们完全透过雾气看人看事，就容易把世界看得变形。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n55"
  },
  {
    "id": "n55",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "老师，我这几天最明显的体会是，情绪来的时候，我会以为自己看得特别清楚。比如“她就是不在乎我”。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n55b"
  },
  {
    "id": "n55b",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "但后来才发现，那只是情绪推出来的解释。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n56"
  },
  {
    "id": "n56",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "很好。强烈情绪会让解释变得绝对：把“她接电话影响了我”推成“她完全不管我”，把“一次冲突”推成“这段关系有问题”。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n57"
  },
  {
    "id": "n57",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "那是不是所有强烈情绪都不可信？",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "concerned",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n58"
  },
  {
    "id": "n58",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "不是。情绪提供重要信息。愤怒可能提示边界被触碰，焦虑可能提示你在意结果，委屈可能提示你渴望被理解。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n58b"
  },
  {
    "id": "n58b",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "我们要做的不是否定信息，而是检查情绪给出的行动命令是否合适。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n59"
  },
  {
    "id": "n59",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "所以我可以听见情绪，但不一定照它说的方式行动。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "thinking",
        "active": true
      }
    ],
    "next": "n60"
  },
  {
    "id": "n60",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "对。情绪管理包括觉察情绪、理解信念、调节表达和选择行动。ABC 理论提供了一个入口：",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n60_p2"
  },
  {
    "id": "n60_p2",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "当 C 很强烈时，回头看 A 和 B，问问自己，我把这件事解释成了什么？有没有更贴近事实、更有行动空间的解释？",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "thinking"
      }
    ],
    "next": "n61"
  },
  {
    "id": "n61",
    "type": "dialogue",
    "speaker": "小欧",
    "text": "我也学到一点。别人提醒我时，我不用立刻觉得自己被指责，也可以先听听对方到底需要什么。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "concerned",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "default"
      }
    ],
    "next": "n62"
  },
  {
    "id": "n62",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我们两个都在练习。她练习不把我的需求听成否定，我练习不把她的开心解释成不在乎我。",
    "chars": [
      {
        "id": "xiaoou",
        "pose": "invite"
      },
      {
        "id": "xiaoye",
        "pose": "default",
        "active": true
      }
    ],
    "next": "n63"
  },
  {
    "id": "n63",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "这就是关系中的情绪管理。不是谁永远不影响谁，而是影响发生以后，双方还有机会把话说清楚。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "default"
      }
    ],
    "next": "n64"
  },
  {
    "id": "n64",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我以前觉得管理情绪就是把情绪压下去。现在觉得，更像是把情绪翻译成人能听懂的话。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "default",
        "active": true
      }
    ],
    "next": "n65"
  },
  {
    "id": "n65",
    "type": "dialogue",
    "speaker": "王老师",
    "text": "这个说法很好。请大家把这句话记下来：情绪是信号，不是命令；解释可以被看见，行动可以被选择。",
    "chars": [
      {
        "id": "wang",
        "pose": "point",
        "active": true
      },
      {
        "id": "xiaoye",
        "pose": "default"
      }
    ],
    "next": "n66"
  },
  {
    "id": "n66",
    "type": "dialogue",
    "speaker": "小叶",
    "text": "我会写在课后反馈里：管理情绪，从觉察自己的解释开始。",
    "chars": [
      {
        "id": "wang",
        "pose": "default"
      },
      {
        "id": "xiaoye",
        "pose": "default",
        "active": true
      }
    ],
    "next": "ending"
  },
  {
    "id": "ending",
    "type": "ending",
    "bg": "assets/scenes/library_study_area.webp",
    "title": "管理情绪<br>从觉察解释开始",
    "text": "情绪是信号，不是命令。看见事件，也看见自己的解释，我们就多了一种选择。",
    "next": "cover"
  }
];

const characterMap = {
  xiaoye: {
    name: "小叶",
    poses: {
      default: ASSETS.xiaoye,
      tired: ASSETS.xiaoyeTired,
      worried: ASSETS.xiaoyeWorried,
      thinking: ASSETS.xiaoyeThinking,
      nervous: ASSETS.xiaoyeNervous,
      sad: ASSETS.xiaoyeSad,
      embarrassed: ASSETS.xiaoyeEmbarrassed
    }
  },
  xiaoou: {
    name: "小欧",
    poses: {
      default: ASSETS.xiaoou,
      phone: ASSETS.xiaoouPhone,
      apologetic: ASSETS.xiaoouApologetic,
      concerned: ASSETS.xiaoouConcerned,
      invite: ASSETS.xiaoouInvite
    }
  },
  wang: {
    name: "王老师",
    poses: {
      default: ASSETS.wang,
      point: ASSETS.wangPoint
    }
  }
};
