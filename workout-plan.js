// 課表唯一編輯來源。修改後儲存並重新整理網頁即可，不需要編譯。
// 修改課表後請增加 revision，避免舊進度套用到新課表。
// days：0=週日、1=週一……6=週六。每個訓練日保留三個 groups。
// title=群組名稱；reps=組次；options=可選動作；id=固定且不重複的動作編號。
// 個別動作可設定 reps，優先於群組 reps（例如平板支撐使用秒數）。
window.WORKOUT_CONFIG = {
  "revision": 2,
  "walking": "快走 2 公里",
  "days": {
    "0": {
      "title": "休息",
      "groups": []
    },
    "1": {
      "title": "背＋腿後側＋肩",
      "groups": [
        {
          "title": "固定式下拉",
          "reps": "4 組 × 8–12 下",
          "options": [
            {
              "id": 67,
              "en": "Iso-Lateral Front Lat Pulldown",
              "cn": "獨立式前側下拉"
            },
            {
              "id": 84,
              "en": "Iso-Lateral Wide Pulldown",
              "cn": "獨立式寬握下拉"
            }
          ]
        },
        {
          "title": "腿後側彎舉",
          "reps": "4 組 × 10–12 下",
          "options": [
            {
              "id": 80,
              "en": "Seated Leg Curl (Machine)",
              "cn": "坐姿腿彎舉"
            },
            {
              "id": 76,
              "en": "Lying Leg Curl (Machine)",
              "cn": "臥姿腿彎舉"
            }
          ]
        },
        {
          "title": "肩推",
          "reps": "4 組 × 8–12 下",
          "options": [
            {
              "id": 65,
              "en": "Iso-Lateral Shoulder Press",
              "cn": "獨立式肩推"
            },
            {
              "id": 78,
              "en": "Shoulder Press (Machine)",
              "cn": "肩推機"
            },
            {
              "id": 52,
              "en": "Iso-Lateral Shoulder Press",
              "cn": "獨立肩部推舉訓練機"
            }
          ]
        }
      ]
    },
    "2": {
      "title": "休息",
      "groups": []
    },
    "3": {
      "title": "腿",
      "groups": [
        {
          "title": "腿推",
          "reps": "4 組 × 8–12 下",
          "options": [
            {
              "id": 75,
              "en": "Leg Press",
              "cn": "腿推機"
            },
            {
              "id": 36,
              "en": "Iso-Lateral Leg Press",
              "cn": "獨立式腿推機"
            },
            {
              "id": 32,
              "en": "Plate-Loaded Leg Press",
              "cn": "掛片式腿推機"
            },
            {
              "id": 46,
              "en": "Leg Press (Horizontal)",
              "cn": "水平腿推機"
            },
            {
              "id": 81,
              "en": "Seated Leg Press (Machine)",
              "cn": "坐姿腿推機"
            }
          ]
        },
        {
          "title": "腿後側彎舉",
          "reps": "4 組 × 10–12 下",
          "options": [
            {
              "id": 80,
              "en": "Seated Leg Curl (Machine)",
              "cn": "坐姿腿彎舉"
            },
            {
              "id": 76,
              "en": "Lying Leg Curl (Machine)",
              "cn": "臥姿腿彎舉"
            }
          ]
        },
        {
          "title": "大腿前側伸展",
          "reps": "4 組 × 10–12 下",
          "options": [
            {
              "id": 79,
              "en": "Leg Extension (Machine)",
              "cn": "腿伸展機"
            },
            {
              "id": 54,
              "en": "Iso-Lateral Leg Extension",
              "cn": "獨立式腿伸展"
            },
            {
              "id": 31,
              "en": "Leg Extension (Plated)",
              "cn": "掛片式腿伸展"
            }
          ]
        }
      ]
    },
    "4": {
      "title": "胸＋核心",
      "groups": [
        {
          "title": "胸推",
          "reps": "4 組 × 8–12 下",
          "options": [
            {
              "id": 53,
              "en": "Chest Press (Machine)",
              "cn": "胸推機"
            },
            {
              "id": 71,
              "en": "Iso-Lateral Chest",
              "cn": "獨立式胸推"
            },
            {
              "id": 85,
              "en": "Iso-Lateral Bench Press",
              "cn": "獨立式平胸推"
            },
            {
              "id": 55,
              "en": "Chest Press",
              "cn": "胸部推舉訓練機"
            },
            {
              "id": 56,
              "en": "Iso-Lateral Chest Press",
              "cn": "獨立式胸部推舉訓練機"
            }
          ]
        },
        {
          "title": "夾胸",
          "reps": "4 組 × 10–12 下",
          "options": [
            {
              "id": 51,
              "en": "Pec Deck (Machine)",
              "cn": "蝴蝶機夾胸"
            },
            {
              "id": 26,
              "en": "Chest Fly",
              "cn": "夾胸（限固定式器材）"
            }
          ]
        },
        {
          "title": "捲腹",
          "reps": "4 組 × 10–15 下",
          "options": [
            {
              "id": 62,
              "en": "Crunch (Machine)",
              "cn": "器械捲腹"
            },
            {
              "id": 20,
              "en": "Crunch",
              "cn": "捲腹"
            },
            {
              "id": 44,
              "en": "Abdominal Crunch",
              "cn": "腹部捲曲"
            }
          ]
        }
      ]
    },
    "5": {
      "title": "背＋核心",
      "groups": [
        {
          "title": "固定式下拉",
          "reps": "4 組 × 8–12 下",
          "options": [
            {
              "id": 67,
              "en": "Iso-Lateral Front Lat Pulldown",
              "cn": "獨立式前側下拉"
            },
            {
              "id": 84,
              "en": "Iso-Lateral Wide Pulldown",
              "cn": "獨立式寬握下拉"
            }
          ]
        },
        {
          "title": "固定式划船",
          "reps": "4 組 × 8–12 下",
          "options": [
            {
              "id": 30,
              "en": "Iso-Lateral Row (Machine)",
              "cn": "獨立式划船"
            },
            {
              "id": 48,
              "en": "Seated Row (Machine)",
              "cn": "坐姿划船（限固定式器材）"
            },
            {
              "id": 69,
              "en": "Iso-Lateral D.Y. Row",
              "cn": "獨立式 D.Y. 划船"
            }
          ]
        },
        {
          "title": "腹部穩定／抬膝",
          "reps": "Plank：4 組 × 20–40 秒；Flat Knee Raise：4 組 × 10–15 下",
          "options": [
            {
              "id": 1,
              "en": "Plank",
              "cn": "平板支撐",
              "reps": "4 組 × 20–40 秒"
            },
            {
              "id": 77,
              "en": "Flat Knee Raise",
              "cn": "仰臥抬膝",
              "reps": "4 組 × 10–15 下"
            }
          ]
        }
      ]
    },
    "6": {
      "title": "肩＋胸＋核心",
      "groups": [
        {
          "title": "肩推",
          "reps": "4 組 × 8–12 下",
          "options": [
            {
              "id": 65,
              "en": "Iso-Lateral Shoulder Press",
              "cn": "獨立式肩推"
            },
            {
              "id": 78,
              "en": "Shoulder Press (Machine)",
              "cn": "肩推機"
            },
            {
              "id": 52,
              "en": "Iso-Lateral Shoulder Press",
              "cn": "獨立肩部推舉訓練機"
            }
          ]
        },
        {
          "title": "上斜胸推",
          "reps": "4 組 × 8–12 下",
          "options": [
            {
              "id": 86,
              "en": "Iso-Lateral Incline Press",
              "cn": "獨立式上斜胸推"
            }
          ]
        },
        {
          "title": "側腹穩定／捲曲",
          "reps": "Side Plank：每側 4 組 × 15–30 秒；Oblique Crunch：每側 4 組 × 10–15 下",
          "options": [
            {
              "id": 2,
              "en": "Side Plank",
              "cn": "側平板支撐",
              "reps": "每側 4 組 × 15–30 秒"
            },
            {
              "id": 59,
              "en": "Oblique Crunch",
              "cn": "側腹捲腹",
              "reps": "每側 4 組 × 10–15 下"
            }
          ]
        }
      ]
    }
  }
};
