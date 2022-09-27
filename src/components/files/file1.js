// 20220805131535
// http://localhost:5000/

const FILE1 = [
  {
    "audioCredit": {
      "agent": {
        "agentID": "1",
        "name": "Phan Văn Ánh",
        "cty": "ABC",
        "hotline": "40072007"
      },
      "customer": {
        "customerID": "1",
        "name": "Trương An Duy",
        "phone": "25927380",
        "address": "Hà Nội",
        "cmnd": "68587952"
      },
      "fileURL": "talk1.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "252s",
      "date": "27/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950cba"
            }
          ],
          "_id": "62ecb56f27473f93e5950cb9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950cbc"
            }
          ],
          "_id": "62ecb56f27473f93e5950cbb"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950cbe"
            }
          ],
          "_id": "62ecb56f27473f93e5950cbd"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950cc0"
            }
          ],
          "_id": "62ecb56f27473f93e5950cbf"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950cc2"
            }
          ],
          "_id": "62ecb56f27473f93e5950cc1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950cc4"
            }
          ],
          "_id": "62ecb56f27473f93e5950cc3"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950cae",
    "audioID": 1,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950caf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950cb0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950cb1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950cb2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950cb3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950cb4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950cb5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950cb6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950cb7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950cb8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "2",
        "name": "Trần Phương Duy",
        "cty": "ABC",
        "hotline": "67796777"
      },
      "customer": {
        "customerID": "2",
        "name": "Phạm Quốc Hồng",
        "phone": "68681878",
        "address": "Hà Nội",
        "cmnd": "36811502"
      },
      "fileURL": "talk2.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "246s",
      "date": "2/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950cd1"
            }
          ],
          "_id": "62ecb56f27473f93e5950cd0"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950cd3"
            }
          ],
          "_id": "62ecb56f27473f93e5950cd2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950cd5"
            }
          ],
          "_id": "62ecb56f27473f93e5950cd4"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950cd7"
            }
          ],
          "_id": "62ecb56f27473f93e5950cd6"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950cd9"
            }
          ],
          "_id": "62ecb56f27473f93e5950cd8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950cdb"
            }
          ],
          "_id": "62ecb56f27473f93e5950cda"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950cc5",
    "audioID": 2,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950cc6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950cc7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950cc8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950cc9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950cca"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950ccb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950ccc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950ccd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950cce"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950ccf"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "3",
        "name": "Ngô Hải An",
        "cty": "ABC",
        "hotline": "40654366"
      },
      "customer": {
        "customerID": "3",
        "name": "Ngô Dương Thái Qúy",
        "phone": "94824941",
        "address": "Hà Nội",
        "cmnd": "17461143"
      },
      "fileURL": "talk3.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "208s",
      "date": "20/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ce8"
            }
          ],
          "_id": "62ecb56f27473f93e5950ce7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950cea"
            }
          ],
          "_id": "62ecb56f27473f93e5950ce9"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950cec"
            }
          ],
          "_id": "62ecb56f27473f93e5950ceb"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950cee"
            }
          ],
          "_id": "62ecb56f27473f93e5950ced"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950cf0"
            }
          ],
          "_id": "62ecb56f27473f93e5950cef"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950cf2"
            }
          ],
          "_id": "62ecb56f27473f93e5950cf1"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950cdc",
    "audioID": 3,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950cdd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950cde"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950cdf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950ce0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950ce1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ce2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950ce3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950ce4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950ce5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950ce6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "4",
        "name": "Trương Văn Lợi",
        "cty": "ABC",
        "hotline": "27858582"
      },
      "customer": {
        "customerID": "4",
        "name": "Phạm Minh Hồng",
        "phone": "26032053",
        "address": "Hà Nội",
        "cmnd": "23314267"
      },
      "fileURL": "talk4.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "193s",
      "date": "5/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950cff"
            }
          ],
          "_id": "62ecb56f27473f93e5950cfe"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d01"
            }
          ],
          "_id": "62ecb56f27473f93e5950d00"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d03"
            }
          ],
          "_id": "62ecb56f27473f93e5950d02"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d05"
            }
          ],
          "_id": "62ecb56f27473f93e5950d04"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d07"
            }
          ],
          "_id": "62ecb56f27473f93e5950d06"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d09"
            }
          ],
          "_id": "62ecb56f27473f93e5950d08"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950cf3",
    "audioID": 4,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950cf4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950cf5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950cf6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950cf7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950cf8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950cf9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950cfa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950cfb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950cfc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950cfd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "5",
        "name": "Trương An Duy",
        "cty": "ABC",
        "hotline": "21646264"
      },
      "customer": {
        "customerID": "5",
        "name": "Trương Minh An",
        "phone": "75628523",
        "address": "Hà Nội",
        "cmnd": "15378822"
      },
      "fileURL": "talk5.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "375s",
      "date": "22/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d16"
            }
          ],
          "_id": "62ecb56f27473f93e5950d15"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d18"
            }
          ],
          "_id": "62ecb56f27473f93e5950d17"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d1a"
            }
          ],
          "_id": "62ecb56f27473f93e5950d19"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d1c"
            }
          ],
          "_id": "62ecb56f27473f93e5950d1b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d1e"
            }
          ],
          "_id": "62ecb56f27473f93e5950d1d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d20"
            }
          ],
          "_id": "62ecb56f27473f93e5950d1f"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950d0a",
    "audioID": 5,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950d0b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950d0c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950d0d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950d0e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950d0f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950d10"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950d11"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950d12"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d13"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950d14"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "6",
        "name": "Trần Hải Lợi",
        "cty": "ABC",
        "hotline": "39423514"
      },
      "customer": {
        "customerID": "6",
        "name": "Trương An Quyền",
        "phone": "49097684",
        "address": "Hà Nội",
        "cmnd": "75699483"
      },
      "fileURL": "talk6.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "272s",
      "date": "17/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d2d"
            }
          ],
          "_id": "62ecb56f27473f93e5950d2c"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d2f"
            }
          ],
          "_id": "62ecb56f27473f93e5950d2e"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d31"
            }
          ],
          "_id": "62ecb56f27473f93e5950d30"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d33"
            }
          ],
          "_id": "62ecb56f27473f93e5950d32"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d35"
            }
          ],
          "_id": "62ecb56f27473f93e5950d34"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d37"
            }
          ],
          "_id": "62ecb56f27473f93e5950d36"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950d21",
    "audioID": 6,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d22"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950d23"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950d24"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d25"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d26"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950d27"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950d28"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950d29"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950d2a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950d2b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "7",
        "name": "Ngô Dương Quyền",
        "cty": "ABC",
        "hotline": "80627802"
      },
      "customer": {
        "customerID": "7",
        "name": "Trương Quốc Lợi",
        "phone": "69756056",
        "address": "Hà Nội",
        "cmnd": "58196263"
      },
      "fileURL": "talk7.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "307s",
      "date": "5/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d44"
            }
          ],
          "_id": "62ecb56f27473f93e5950d43"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d46"
            }
          ],
          "_id": "62ecb56f27473f93e5950d45"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d48"
            }
          ],
          "_id": "62ecb56f27473f93e5950d47"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d4a"
            }
          ],
          "_id": "62ecb56f27473f93e5950d49"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d4c"
            }
          ],
          "_id": "62ecb56f27473f93e5950d4b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d4e"
            }
          ],
          "_id": "62ecb56f27473f93e5950d4d"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950d38",
    "audioID": 7,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950d39"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950d3a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950d3b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950d3c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950d3d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950d3e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950d3f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950d40"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950d41"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950d42"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "8",
        "name": "Ngô Minh Quyền",
        "cty": "ABC",
        "hotline": "42517986"
      },
      "customer": {
        "customerID": "8",
        "name": "Lê Quốc Khánh",
        "phone": "63145022",
        "address": "Hà Nội",
        "cmnd": "47614705"
      },
      "fileURL": "talk8.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "335s",
      "date": "21/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d5b"
            }
          ],
          "_id": "62ecb56f27473f93e5950d5a"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d5d"
            }
          ],
          "_id": "62ecb56f27473f93e5950d5c"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d5f"
            }
          ],
          "_id": "62ecb56f27473f93e5950d5e"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d61"
            }
          ],
          "_id": "62ecb56f27473f93e5950d60"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d63"
            }
          ],
          "_id": "62ecb56f27473f93e5950d62"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d65"
            }
          ],
          "_id": "62ecb56f27473f93e5950d64"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950d4f",
    "audioID": 8,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d50"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d51"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950d52"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d53"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950d54"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950d55"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d56"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d57"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950d58"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950d59"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "9",
        "name": "Ngô Phương Ánh",
        "cty": "ABC",
        "hotline": "98034480"
      },
      "customer": {
        "customerID": "9",
        "name": "Lê Hải Ánh",
        "phone": "32308532",
        "address": "Hà Nội",
        "cmnd": "32299495"
      },
      "fileURL": "talk9.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "112s",
      "date": "27/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d72"
            }
          ],
          "_id": "62ecb56f27473f93e5950d71"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d74"
            }
          ],
          "_id": "62ecb56f27473f93e5950d73"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d76"
            }
          ],
          "_id": "62ecb56f27473f93e5950d75"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d78"
            }
          ],
          "_id": "62ecb56f27473f93e5950d77"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d7a"
            }
          ],
          "_id": "62ecb56f27473f93e5950d79"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d7c"
            }
          ],
          "_id": "62ecb56f27473f93e5950d7b"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950d66",
    "audioID": 9,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950d67"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d68"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950d69"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950d6a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950d6b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d6c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d6d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950d6e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950d6f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d70"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "10",
        "name": "Bùi Thị Dạ",
        "cty": "ABC",
        "hotline": "36847819"
      },
      "customer": {
        "customerID": "10",
        "name": "Nguyễn Khánh Lợi",
        "phone": "27443778",
        "address": "Hà Nội",
        "cmnd": "49346377"
      },
      "fileURL": "talk10.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "563s",
      "date": "23/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d89"
            }
          ],
          "_id": "62ecb56f27473f93e5950d88"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d8b"
            }
          ],
          "_id": "62ecb56f27473f93e5950d8a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950d8d"
            }
          ],
          "_id": "62ecb56f27473f93e5950d8c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d8f"
            }
          ],
          "_id": "62ecb56f27473f93e5950d8e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d91"
            }
          ],
          "_id": "62ecb56f27473f93e5950d90"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950d93"
            }
          ],
          "_id": "62ecb56f27473f93e5950d92"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950d7d",
    "audioID": 10,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950d7e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950d7f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950d80"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950d81"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950d82"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950d83"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950d84"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950d85"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950d86"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950d87"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "11",
        "name": "Phan An Dạ",
        "cty": "ABC",
        "hotline": "19694423"
      },
      "customer": {
        "customerID": "11",
        "name": "Trần Minh Duy",
        "phone": "54551177",
        "address": "Hà Nội",
        "cmnd": "79116644"
      },
      "fileURL": "talk11.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "522s",
      "date": "14/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950da0"
            }
          ],
          "_id": "62ecb56f27473f93e5950d9f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950da2"
            }
          ],
          "_id": "62ecb56f27473f93e5950da1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950da4"
            }
          ],
          "_id": "62ecb56f27473f93e5950da3"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950da6"
            }
          ],
          "_id": "62ecb56f27473f93e5950da5"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950da8"
            }
          ],
          "_id": "62ecb56f27473f93e5950da7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950daa"
            }
          ],
          "_id": "62ecb56f27473f93e5950da9"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950d94",
    "audioID": 11,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950d95"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950d96"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950d97"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950d98"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d99"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950d9a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950d9b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950d9c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950d9d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950d9e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "12",
        "name": "Nguyễn Quốc Khánh",
        "cty": "ABC",
        "hotline": "79666510"
      },
      "customer": {
        "customerID": "12",
        "name": "Phạm Phương Quyền",
        "phone": "54866601",
        "address": "Hà Nội",
        "cmnd": "92180388"
      },
      "fileURL": "talk12.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "582s",
      "date": "1/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950db7"
            }
          ],
          "_id": "62ecb56f27473f93e5950db6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950db9"
            }
          ],
          "_id": "62ecb56f27473f93e5950db8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950dbb"
            }
          ],
          "_id": "62ecb56f27473f93e5950dba"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950dbd"
            }
          ],
          "_id": "62ecb56f27473f93e5950dbc"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950dbf"
            }
          ],
          "_id": "62ecb56f27473f93e5950dbe"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950dc1"
            }
          ],
          "_id": "62ecb56f27473f93e5950dc0"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950dab",
    "audioID": 12,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950dac"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950dad"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950dae"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950daf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950db0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950db1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950db2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950db3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950db4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950db5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "13",
        "name": "Nguyễn Hải An",
        "cty": "ABC",
        "hotline": "16586843"
      },
      "customer": {
        "customerID": "13",
        "name": "Đặng Văn Dạ",
        "phone": "51308509",
        "address": "Hà Nội",
        "cmnd": "25251068"
      },
      "fileURL": "talk13.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "440s",
      "date": "12/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950dce"
            }
          ],
          "_id": "62ecb56f27473f93e5950dcd"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950dd0"
            }
          ],
          "_id": "62ecb56f27473f93e5950dcf"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950dd2"
            }
          ],
          "_id": "62ecb56f27473f93e5950dd1"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950dd4"
            }
          ],
          "_id": "62ecb56f27473f93e5950dd3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950dd6"
            }
          ],
          "_id": "62ecb56f27473f93e5950dd5"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950dd8"
            }
          ],
          "_id": "62ecb56f27473f93e5950dd7"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950dc2",
    "audioID": 13,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950dc3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950dc4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950dc5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950dc6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950dc7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950dc8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950dc9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950dca"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950dcb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950dcc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "14",
        "name": "Đặng Văn Ánh",
        "cty": "ABC",
        "hotline": "60609920"
      },
      "customer": {
        "customerID": "14",
        "name": "Trương Thị Lợi",
        "phone": "69482568",
        "address": "Hà Nội",
        "cmnd": "41334430"
      },
      "fileURL": "talk14.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "421s",
      "date": "28/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950de5"
            }
          ],
          "_id": "62ecb56f27473f93e5950de4"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950de7"
            }
          ],
          "_id": "62ecb56f27473f93e5950de6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950de9"
            }
          ],
          "_id": "62ecb56f27473f93e5950de8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950deb"
            }
          ],
          "_id": "62ecb56f27473f93e5950dea"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ded"
            }
          ],
          "_id": "62ecb56f27473f93e5950dec"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950def"
            }
          ],
          "_id": "62ecb56f27473f93e5950dee"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950dd9",
    "audioID": 14,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950dda"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950ddb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950ddc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ddd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950dde"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950ddf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950de0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950de1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950de2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950de3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "15",
        "name": "Trần Hữu Duy",
        "cty": "ABC",
        "hotline": "26467362"
      },
      "customer": {
        "customerID": "15",
        "name": "Ngô Thị An",
        "phone": "59174847",
        "address": "Hà Nội",
        "cmnd": "40599152"
      },
      "fileURL": "talk15.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "240s",
      "date": "27/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950dfc"
            }
          ],
          "_id": "62ecb56f27473f93e5950dfb"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950dfe"
            }
          ],
          "_id": "62ecb56f27473f93e5950dfd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e00"
            }
          ],
          "_id": "62ecb56f27473f93e5950dff"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e02"
            }
          ],
          "_id": "62ecb56f27473f93e5950e01"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e04"
            }
          ],
          "_id": "62ecb56f27473f93e5950e03"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e06"
            }
          ],
          "_id": "62ecb56f27473f93e5950e05"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950df0",
    "audioID": 15,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950df1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950df2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950df3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950df4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950df5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950df6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950df7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950df8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950df9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950dfa"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "16",
        "name": "Ngô Minh Dạ",
        "cty": "ABC",
        "hotline": "78048966"
      },
      "customer": {
        "customerID": "16",
        "name": "Trần Quốc Lợi",
        "phone": "26487771",
        "address": "Hà Nội",
        "cmnd": "67883013"
      },
      "fileURL": "talk16.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "504s",
      "date": "9/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e13"
            }
          ],
          "_id": "62ecb56f27473f93e5950e12"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e15"
            }
          ],
          "_id": "62ecb56f27473f93e5950e14"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e17"
            }
          ],
          "_id": "62ecb56f27473f93e5950e16"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e19"
            }
          ],
          "_id": "62ecb56f27473f93e5950e18"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e1b"
            }
          ],
          "_id": "62ecb56f27473f93e5950e1a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e1d"
            }
          ],
          "_id": "62ecb56f27473f93e5950e1c"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950e07",
    "audioID": 16,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950e08"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e09"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950e0a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950e0b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950e0c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950e0d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950e0e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e0f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e10"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e11"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "17",
        "name": "Phạm Khánh Lợi",
        "cty": "ABC",
        "hotline": "95293643"
      },
      "customer": {
        "customerID": "17",
        "name": "Bùi Dương Cảnh",
        "phone": "34414632",
        "address": "Hà Nội",
        "cmnd": "64419848"
      },
      "fileURL": "talk17.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "388s",
      "date": "28/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e2a"
            }
          ],
          "_id": "62ecb56f27473f93e5950e29"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e2c"
            }
          ],
          "_id": "62ecb56f27473f93e5950e2b"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e2e"
            }
          ],
          "_id": "62ecb56f27473f93e5950e2d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e30"
            }
          ],
          "_id": "62ecb56f27473f93e5950e2f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e32"
            }
          ],
          "_id": "62ecb56f27473f93e5950e31"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e34"
            }
          ],
          "_id": "62ecb56f27473f93e5950e33"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950e1e",
    "audioID": 17,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950e1f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950e20"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950e21"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e22"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e23"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e24"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e25"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950e26"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950e27"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950e28"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "18",
        "name": "Ngô Hữu Quyền",
        "cty": "ABC",
        "hotline": "42800524"
      },
      "customer": {
        "customerID": "18",
        "name": "Huỳnh Phương Ánh",
        "phone": "50549215",
        "address": "Hà Nội",
        "cmnd": "30893505"
      },
      "fileURL": "talk18.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "402s",
      "date": "10/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e41"
            }
          ],
          "_id": "62ecb56f27473f93e5950e40"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e43"
            }
          ],
          "_id": "62ecb56f27473f93e5950e42"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e45"
            }
          ],
          "_id": "62ecb56f27473f93e5950e44"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e47"
            }
          ],
          "_id": "62ecb56f27473f93e5950e46"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e49"
            }
          ],
          "_id": "62ecb56f27473f93e5950e48"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e4b"
            }
          ],
          "_id": "62ecb56f27473f93e5950e4a"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950e35",
    "audioID": 18,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950e36"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950e37"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950e38"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950e39"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e3a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e3b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e3c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950e3d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950e3e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950e3f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "19",
        "name": "Huỳnh Dương An",
        "cty": "ABC",
        "hotline": "55628249"
      },
      "customer": {
        "customerID": "19",
        "name": "Đặng Quốc An",
        "phone": "39268270",
        "address": "Hà Nội",
        "cmnd": "64835368"
      },
      "fileURL": "talk19.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "116s",
      "date": "20/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e58"
            }
          ],
          "_id": "62ecb56f27473f93e5950e57"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e5a"
            }
          ],
          "_id": "62ecb56f27473f93e5950e59"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e5c"
            }
          ],
          "_id": "62ecb56f27473f93e5950e5b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e5e"
            }
          ],
          "_id": "62ecb56f27473f93e5950e5d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e60"
            }
          ],
          "_id": "62ecb56f27473f93e5950e5f"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e62"
            }
          ],
          "_id": "62ecb56f27473f93e5950e61"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950e4c",
    "audioID": 19,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950e4d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950e4e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950e4f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950e50"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950e51"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e52"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950e53"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e54"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950e55"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950e56"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "20",
        "name": "Trương Dương Quyền",
        "cty": "ABC",
        "hotline": "49566089"
      },
      "customer": {
        "customerID": "20",
        "name": "Huỳnh Khánh Thái Qúy",
        "phone": "72395039",
        "address": "Hà Nội",
        "cmnd": "97516537"
      },
      "fileURL": "talk20.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "295s",
      "date": "21/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e6f"
            }
          ],
          "_id": "62ecb56f27473f93e5950e6e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e71"
            }
          ],
          "_id": "62ecb56f27473f93e5950e70"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e73"
            }
          ],
          "_id": "62ecb56f27473f93e5950e72"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e75"
            }
          ],
          "_id": "62ecb56f27473f93e5950e74"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e77"
            }
          ],
          "_id": "62ecb56f27473f93e5950e76"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e79"
            }
          ],
          "_id": "62ecb56f27473f93e5950e78"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950e63",
    "audioID": 20,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950e64"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e65"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e66"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950e67"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e68"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950e69"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e6a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e6b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e6c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e6d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "21",
        "name": "Huỳnh Dương Duy",
        "cty": "ABC",
        "hotline": "28052575"
      },
      "customer": {
        "customerID": "21",
        "name": "Phan Hải Thái Qúy",
        "phone": "33493381",
        "address": "Hà Nội",
        "cmnd": "96903007"
      },
      "fileURL": "talk21.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "356s",
      "date": "12/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e86"
            }
          ],
          "_id": "62ecb56f27473f93e5950e85"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e88"
            }
          ],
          "_id": "62ecb56f27473f93e5950e87"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e8a"
            }
          ],
          "_id": "62ecb56f27473f93e5950e89"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e8c"
            }
          ],
          "_id": "62ecb56f27473f93e5950e8b"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e8e"
            }
          ],
          "_id": "62ecb56f27473f93e5950e8d"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e90"
            }
          ],
          "_id": "62ecb56f27473f93e5950e8f"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950e7a",
    "audioID": 21,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e7b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e7c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950e7d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950e7e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950e7f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950e80"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950e81"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950e82"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e83"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950e84"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "22",
        "name": "Phan Văn Hồng",
        "cty": "ABC",
        "hotline": "96163169"
      },
      "customer": {
        "customerID": "22",
        "name": "Bùi Quốc Thái Qúy",
        "phone": "70389716",
        "address": "Hà Nội",
        "cmnd": "88985385"
      },
      "fileURL": "talk22.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "319s",
      "date": "20/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950e9d"
            }
          ],
          "_id": "62ecb56f27473f93e5950e9c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950e9f"
            }
          ],
          "_id": "62ecb56f27473f93e5950e9e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ea1"
            }
          ],
          "_id": "62ecb56f27473f93e5950ea0"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ea3"
            }
          ],
          "_id": "62ecb56f27473f93e5950ea2"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ea5"
            }
          ],
          "_id": "62ecb56f27473f93e5950ea4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ea7"
            }
          ],
          "_id": "62ecb56f27473f93e5950ea6"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950e91",
    "audioID": 22,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950e92"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950e93"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e94"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e95"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950e96"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e97"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950e98"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e99"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950e9a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950e9b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "23",
        "name": "Trần Văn Ánh",
        "cty": "ABC",
        "hotline": "67651794"
      },
      "customer": {
        "customerID": "23",
        "name": "Trần An Hồng",
        "phone": "62672924",
        "address": "Hà Nội",
        "cmnd": "35106753"
      },
      "fileURL": "talk23.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "217s",
      "date": "29/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950eb4"
            }
          ],
          "_id": "62ecb56f27473f93e5950eb3"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950eb6"
            }
          ],
          "_id": "62ecb56f27473f93e5950eb5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950eb8"
            }
          ],
          "_id": "62ecb56f27473f93e5950eb7"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950eba"
            }
          ],
          "_id": "62ecb56f27473f93e5950eb9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ebc"
            }
          ],
          "_id": "62ecb56f27473f93e5950ebb"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ebe"
            }
          ],
          "_id": "62ecb56f27473f93e5950ebd"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950ea8",
    "audioID": 23,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ea9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950eaa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950eab"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950eac"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ead"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950eae"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950eaf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950eb0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950eb1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950eb2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "24",
        "name": "Huỳnh Minh Quyền",
        "cty": "ABC",
        "hotline": "56555292"
      },
      "customer": {
        "customerID": "24",
        "name": "Trần Minh Khánh",
        "phone": "24645526",
        "address": "Hà Nội",
        "cmnd": "84418699"
      },
      "fileURL": "talk24.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "569s",
      "date": "12/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950ecb"
            }
          ],
          "_id": "62ecb56f27473f93e5950eca"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950ecd"
            }
          ],
          "_id": "62ecb56f27473f93e5950ecc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950ecf"
            }
          ],
          "_id": "62ecb56f27473f93e5950ece"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ed1"
            }
          ],
          "_id": "62ecb56f27473f93e5950ed0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950ed3"
            }
          ],
          "_id": "62ecb56f27473f93e5950ed2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950ed5"
            }
          ],
          "_id": "62ecb56f27473f93e5950ed4"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950ebf",
    "audioID": 24,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ec0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ec1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950ec2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950ec3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950ec4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950ec5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950ec6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ec7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950ec8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950ec9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "25",
        "name": "Trần Văn Ánh",
        "cty": "ABC",
        "hotline": "34728940"
      },
      "customer": {
        "customerID": "25",
        "name": "Trần Quốc An",
        "phone": "66052024",
        "address": "Hà Nội",
        "cmnd": "40889692"
      },
      "fileURL": "talk25.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "263s",
      "date": "27/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950ee2"
            }
          ],
          "_id": "62ecb56f27473f93e5950ee1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ee4"
            }
          ],
          "_id": "62ecb56f27473f93e5950ee3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ee6"
            }
          ],
          "_id": "62ecb56f27473f93e5950ee5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950ee8"
            }
          ],
          "_id": "62ecb56f27473f93e5950ee7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950eea"
            }
          ],
          "_id": "62ecb56f27473f93e5950ee9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950eec"
            }
          ],
          "_id": "62ecb56f27473f93e5950eeb"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950ed6",
    "audioID": 25,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950ed7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950ed8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ed9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950eda"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950edb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950edc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950edd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950ede"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950edf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ee0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "26",
        "name": "Lê Khánh Khánh",
        "cty": "ABC",
        "hotline": "99510635"
      },
      "customer": {
        "customerID": "26",
        "name": "Bùi Phương Ánh",
        "phone": "56227852",
        "address": "Hà Nội",
        "cmnd": "60288614"
      },
      "fileURL": "talk26.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "298s",
      "date": "22/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950ef9"
            }
          ],
          "_id": "62ecb56f27473f93e5950ef8"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950efb"
            }
          ],
          "_id": "62ecb56f27473f93e5950efa"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950efd"
            }
          ],
          "_id": "62ecb56f27473f93e5950efc"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950eff"
            }
          ],
          "_id": "62ecb56f27473f93e5950efe"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f01"
            }
          ],
          "_id": "62ecb56f27473f93e5950f00"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950f03"
            }
          ],
          "_id": "62ecb56f27473f93e5950f02"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950eed",
    "audioID": 26,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950eee"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950eef"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ef0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950ef1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950ef2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ef3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950ef4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950ef5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950ef6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950ef7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "27",
        "name": "Phạm Thị Quyền",
        "cty": "ABC",
        "hotline": "55558446"
      },
      "customer": {
        "customerID": "27",
        "name": "Huỳnh Dương Khánh",
        "phone": "56273890",
        "address": "Hà Nội",
        "cmnd": "21774916"
      },
      "fileURL": "talk27.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "216s",
      "date": "2/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f10"
            }
          ],
          "_id": "62ecb56f27473f93e5950f0f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f12"
            }
          ],
          "_id": "62ecb56f27473f93e5950f11"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950f14"
            }
          ],
          "_id": "62ecb56f27473f93e5950f13"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950f16"
            }
          ],
          "_id": "62ecb56f27473f93e5950f15"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f18"
            }
          ],
          "_id": "62ecb56f27473f93e5950f17"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950f1a"
            }
          ],
          "_id": "62ecb56f27473f93e5950f19"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950f04",
    "audioID": 27,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950f05"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950f06"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950f07"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950f08"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950f09"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950f0a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950f0b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950f0c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950f0d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950f0e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "28",
        "name": "Trần Quốc Duy",
        "cty": "ABC",
        "hotline": "19102467"
      },
      "customer": {
        "customerID": "28",
        "name": "Bùi An Hồng",
        "phone": "78507923",
        "address": "Hà Nội",
        "cmnd": "55093136"
      },
      "fileURL": "talk28.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "576s",
      "date": "17/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f27"
            }
          ],
          "_id": "62ecb56f27473f93e5950f26"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f29"
            }
          ],
          "_id": "62ecb56f27473f93e5950f28"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950f2b"
            }
          ],
          "_id": "62ecb56f27473f93e5950f2a"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f2d"
            }
          ],
          "_id": "62ecb56f27473f93e5950f2c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950f2f"
            }
          ],
          "_id": "62ecb56f27473f93e5950f2e"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f31"
            }
          ],
          "_id": "62ecb56f27473f93e5950f30"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950f1b",
    "audioID": 28,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950f1c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950f1d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950f1e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950f1f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950f20"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950f21"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950f22"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950f23"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950f24"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950f25"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "29",
        "name": "Lê Văn Duy",
        "cty": "ABC",
        "hotline": "67440058"
      },
      "customer": {
        "customerID": "29",
        "name": "Đặng Khánh Duy",
        "phone": "29968583",
        "address": "Hà Nội",
        "cmnd": "87699843"
      },
      "fileURL": "talk29.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "80s",
      "date": "23/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f3e"
            }
          ],
          "_id": "62ecb56f27473f93e5950f3d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950f40"
            }
          ],
          "_id": "62ecb56f27473f93e5950f3f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f42"
            }
          ],
          "_id": "62ecb56f27473f93e5950f41"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb56f27473f93e5950f44"
            }
          ],
          "_id": "62ecb56f27473f93e5950f43"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f46"
            }
          ],
          "_id": "62ecb56f27473f93e5950f45"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb56f27473f93e5950f48"
            }
          ],
          "_id": "62ecb56f27473f93e5950f47"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950f32",
    "audioID": 29,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950f33"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "ừ"
        },
        "_id": "62ecb56f27473f93e5950f34"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950f35"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950f36"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950f37"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950f38"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950f39"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb56f27473f93e5950f3a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "phải"
        },
        "_id": "62ecb56f27473f93e5950f3b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb56f27473f93e5950f3c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "30",
        "name": "Ngô Dương Dạ",
        "cty": "ABC",
        "hotline": "42042312"
      },
      "customer": {
        "customerID": "30",
        "name": "Trần Phương Thái Qúy",
        "phone": "47749556",
        "address": "Hà Nội",
        "cmnd": "25349622"
      },
      "fileURL": "talk30.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "273s",
      "date": "5/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950f55"
            }
          ],
          "_id": "62ecb57027473f93e5950f54"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5950f57"
            }
          ],
          "_id": "62ecb57027473f93e5950f56"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f59"
            }
          ],
          "_id": "62ecb57027473f93e5950f58"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950f5b"
            }
          ],
          "_id": "62ecb57027473f93e5950f5a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950f5d"
            }
          ],
          "_id": "62ecb57027473f93e5950f5c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f5f"
            }
          ],
          "_id": "62ecb57027473f93e5950f5e"
        }
      ]
    },
    "_id": "62ecb56f27473f93e5950f49",
    "audioID": 30,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb56f27473f93e5950f4a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "đợi"
        },
        "_id": "62ecb56f27473f93e5950f4b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb56f27473f93e5950f4c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb56f27473f93e5950f4d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb56f27473f93e5950f4e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5950f4f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5950f50"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5950f51"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950f52"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5950f53"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "31",
        "name": "Trần Văn Hồng",
        "cty": "ABC",
        "hotline": "89695766"
      },
      "customer": {
        "customerID": "31",
        "name": "Nguyễn Quốc Lợi",
        "phone": "18914059",
        "address": "Hà Nội",
        "cmnd": "41030574"
      },
      "fileURL": "talk31.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "227s",
      "date": "27/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950f6c"
            }
          ],
          "_id": "62ecb57027473f93e5950f6b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f6e"
            }
          ],
          "_id": "62ecb57027473f93e5950f6d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f70"
            }
          ],
          "_id": "62ecb57027473f93e5950f6f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950f72"
            }
          ],
          "_id": "62ecb57027473f93e5950f71"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f74"
            }
          ],
          "_id": "62ecb57027473f93e5950f73"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f76"
            }
          ],
          "_id": "62ecb57027473f93e5950f75"
        }
      ]
    },
    "_id": "62ecb57027473f93e5950f60",
    "audioID": 31,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5950f61"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5950f62"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5950f63"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5950f64"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5950f65"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5950f66"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5950f67"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5950f68"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5950f69"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5950f6a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "32",
        "name": "Huỳnh Văn Hồng",
        "cty": "ABC",
        "hotline": "45721552"
      },
      "customer": {
        "customerID": "32",
        "name": "Trương Hải Ánh",
        "phone": "54873771",
        "address": "Hà Nội",
        "cmnd": "31431181"
      },
      "fileURL": "talk32.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "599s",
      "date": "15/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f83"
            }
          ],
          "_id": "62ecb57027473f93e5950f82"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f85"
            }
          ],
          "_id": "62ecb57027473f93e5950f84"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f87"
            }
          ],
          "_id": "62ecb57027473f93e5950f86"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f89"
            }
          ],
          "_id": "62ecb57027473f93e5950f88"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f8b"
            }
          ],
          "_id": "62ecb57027473f93e5950f8a"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950f8d"
            }
          ],
          "_id": "62ecb57027473f93e5950f8c"
        }
      ]
    },
    "_id": "62ecb57027473f93e5950f77",
    "audioID": 32,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950f78"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5950f79"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5950f7a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950f7b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5950f7c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5950f7d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5950f7e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5950f7f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5950f80"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5950f81"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "33",
        "name": "Trần Phương Khánh",
        "cty": "ABC",
        "hotline": "64291856"
      },
      "customer": {
        "customerID": "33",
        "name": "Lê Hải Thái Qúy",
        "phone": "49345010",
        "address": "Hà Nội",
        "cmnd": "54032481"
      },
      "fileURL": "talk33.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "576s",
      "date": "18/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950f9a"
            }
          ],
          "_id": "62ecb57027473f93e5950f99"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5950f9c"
            }
          ],
          "_id": "62ecb57027473f93e5950f9b"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950f9e"
            }
          ],
          "_id": "62ecb57027473f93e5950f9d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950fa0"
            }
          ],
          "_id": "62ecb57027473f93e5950f9f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5950fa2"
            }
          ],
          "_id": "62ecb57027473f93e5950fa1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950fa4"
            }
          ],
          "_id": "62ecb57027473f93e5950fa3"
        }
      ]
    },
    "_id": "62ecb57027473f93e5950f8e",
    "audioID": 33,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5950f8f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5950f90"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5950f91"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950f92"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5950f93"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5950f94"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5950f95"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5950f96"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950f97"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950f98"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "34",
        "name": "Ngô Khánh Khánh",
        "cty": "ABC",
        "hotline": "60716093"
      },
      "customer": {
        "customerID": "34",
        "name": "Đặng An Duy",
        "phone": "36912821",
        "address": "Hà Nội",
        "cmnd": "45185975"
      },
      "fileURL": "talk34.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "282s",
      "date": "5/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fb1"
            }
          ],
          "_id": "62ecb57027473f93e5950fb0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fb3"
            }
          ],
          "_id": "62ecb57027473f93e5950fb2"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fb5"
            }
          ],
          "_id": "62ecb57027473f93e5950fb4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5950fb7"
            }
          ],
          "_id": "62ecb57027473f93e5950fb6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950fb9"
            }
          ],
          "_id": "62ecb57027473f93e5950fb8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fbb"
            }
          ],
          "_id": "62ecb57027473f93e5950fba"
        }
      ]
    },
    "_id": "62ecb57027473f93e5950fa5",
    "audioID": 34,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5950fa6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950fa7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5950fa8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950fa9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5950faa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5950fab"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950fac"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950fad"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5950fae"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950faf"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "35",
        "name": "Đặng Minh Lợi",
        "cty": "ABC",
        "hotline": "96737185"
      },
      "customer": {
        "customerID": "35",
        "name": "Đặng Quốc Ánh",
        "phone": "40863610",
        "address": "Hà Nội",
        "cmnd": "63882761"
      },
      "fileURL": "talk35.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "445s",
      "date": "16/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950fc8"
            }
          ],
          "_id": "62ecb57027473f93e5950fc7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5950fca"
            }
          ],
          "_id": "62ecb57027473f93e5950fc9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fcc"
            }
          ],
          "_id": "62ecb57027473f93e5950fcb"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fce"
            }
          ],
          "_id": "62ecb57027473f93e5950fcd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fd0"
            }
          ],
          "_id": "62ecb57027473f93e5950fcf"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fd2"
            }
          ],
          "_id": "62ecb57027473f93e5950fd1"
        }
      ]
    },
    "_id": "62ecb57027473f93e5950fbc",
    "audioID": 35,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5950fbd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5950fbe"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5950fbf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5950fc0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5950fc1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5950fc2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950fc3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5950fc4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5950fc5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5950fc6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "36",
        "name": "Ngô Hữu An",
        "cty": "ABC",
        "hotline": "62444528"
      },
      "customer": {
        "customerID": "36",
        "name": "Đặng Thị Khánh",
        "phone": "66505007",
        "address": "Hà Nội",
        "cmnd": "30826975"
      },
      "fileURL": "talk36.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "132s",
      "date": "30/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fdf"
            }
          ],
          "_id": "62ecb57027473f93e5950fde"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fe1"
            }
          ],
          "_id": "62ecb57027473f93e5950fe0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950fe3"
            }
          ],
          "_id": "62ecb57027473f93e5950fe2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fe5"
            }
          ],
          "_id": "62ecb57027473f93e5950fe4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950fe7"
            }
          ],
          "_id": "62ecb57027473f93e5950fe6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5950fe9"
            }
          ],
          "_id": "62ecb57027473f93e5950fe8"
        }
      ]
    },
    "_id": "62ecb57027473f93e5950fd3",
    "audioID": 36,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950fd4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950fd5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5950fd6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5950fd7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5950fd8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5950fd9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5950fda"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950fdb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5950fdc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5950fdd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "37",
        "name": "Trương Thị An",
        "cty": "ABC",
        "hotline": "85095537"
      },
      "customer": {
        "customerID": "37",
        "name": "Đặng Phương Hồng",
        "phone": "91811347",
        "address": "Hà Nội",
        "cmnd": "16374379"
      },
      "fileURL": "talk37.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "396s",
      "date": "22/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5950ff6"
            }
          ],
          "_id": "62ecb57027473f93e5950ff5"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950ff8"
            }
          ],
          "_id": "62ecb57027473f93e5950ff7"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950ffa"
            }
          ],
          "_id": "62ecb57027473f93e5950ff9"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5950ffc"
            }
          ],
          "_id": "62ecb57027473f93e5950ffb"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5950ffe"
            }
          ],
          "_id": "62ecb57027473f93e5950ffd"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951000"
            }
          ],
          "_id": "62ecb57027473f93e5950fff"
        }
      ]
    },
    "_id": "62ecb57027473f93e5950fea",
    "audioID": 37,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5950feb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5950fec"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950fed"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5950fee"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5950fef"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5950ff0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5950ff1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5950ff2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5950ff3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5950ff4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "38",
        "name": "Phan Quốc Cảnh",
        "cty": "ABC",
        "hotline": "53022018"
      },
      "customer": {
        "customerID": "38",
        "name": "Trần Khánh Cảnh",
        "phone": "85483891",
        "address": "Hà Nội",
        "cmnd": "26551920"
      },
      "fileURL": "talk38.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "227s",
      "date": "3/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595100d"
            }
          ],
          "_id": "62ecb57027473f93e595100c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595100f"
            }
          ],
          "_id": "62ecb57027473f93e595100e"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951011"
            }
          ],
          "_id": "62ecb57027473f93e5951010"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951013"
            }
          ],
          "_id": "62ecb57027473f93e5951012"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951015"
            }
          ],
          "_id": "62ecb57027473f93e5951014"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951017"
            }
          ],
          "_id": "62ecb57027473f93e5951016"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951001",
    "audioID": 38,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951002"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951003"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951004"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951005"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951006"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951007"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951008"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951009"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595100a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595100b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "39",
        "name": "Ngô An Quyền",
        "cty": "ABC",
        "hotline": "25781355"
      },
      "customer": {
        "customerID": "39",
        "name": "Huỳnh Thị Duy",
        "phone": "86530790",
        "address": "Hà Nội",
        "cmnd": "63632182"
      },
      "fileURL": "talk39.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "311s",
      "date": "8/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951024"
            }
          ],
          "_id": "62ecb57027473f93e5951023"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951026"
            }
          ],
          "_id": "62ecb57027473f93e5951025"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951028"
            }
          ],
          "_id": "62ecb57027473f93e5951027"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595102a"
            }
          ],
          "_id": "62ecb57027473f93e5951029"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595102c"
            }
          ],
          "_id": "62ecb57027473f93e595102b"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595102e"
            }
          ],
          "_id": "62ecb57027473f93e595102d"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951018",
    "audioID": 39,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951019"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595101a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595101b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595101c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e595101d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595101e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595101f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951020"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951021"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951022"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "40",
        "name": "Huỳnh Minh Cảnh",
        "cty": "ABC",
        "hotline": "28816449"
      },
      "customer": {
        "customerID": "40",
        "name": "Bùi Thị Quyền",
        "phone": "12243673",
        "address": "Hà Nội",
        "cmnd": "36593278"
      },
      "fileURL": "talk40.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "374s",
      "date": "5/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595103b"
            }
          ],
          "_id": "62ecb57027473f93e595103a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595103d"
            }
          ],
          "_id": "62ecb57027473f93e595103c"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595103f"
            }
          ],
          "_id": "62ecb57027473f93e595103e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951041"
            }
          ],
          "_id": "62ecb57027473f93e5951040"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951043"
            }
          ],
          "_id": "62ecb57027473f93e5951042"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951045"
            }
          ],
          "_id": "62ecb57027473f93e5951044"
        }
      ]
    },
    "_id": "62ecb57027473f93e595102f",
    "audioID": 40,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951030"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951031"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951032"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951033"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951034"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951035"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951036"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951037"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951038"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951039"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "41",
        "name": "Bùi An Dạ",
        "cty": "ABC",
        "hotline": "69280084"
      },
      "customer": {
        "customerID": "41",
        "name": "Nguyễn Thị Thái Qúy",
        "phone": "72853499",
        "address": "Hà Nội",
        "cmnd": "83153575"
      },
      "fileURL": "talk41.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "130s",
      "date": "7/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951052"
            }
          ],
          "_id": "62ecb57027473f93e5951051"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951054"
            }
          ],
          "_id": "62ecb57027473f93e5951053"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951056"
            }
          ],
          "_id": "62ecb57027473f93e5951055"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951058"
            }
          ],
          "_id": "62ecb57027473f93e5951057"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595105a"
            }
          ],
          "_id": "62ecb57027473f93e5951059"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595105c"
            }
          ],
          "_id": "62ecb57027473f93e595105b"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951046",
    "audioID": 41,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951047"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951048"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951049"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e595104a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e595104b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595104c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595104d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595104e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595104f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951050"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "42",
        "name": "Nguyễn Văn Hồng",
        "cty": "ABC",
        "hotline": "90681260"
      },
      "customer": {
        "customerID": "42",
        "name": "Đặng Hữu An",
        "phone": "48585687",
        "address": "Hà Nội",
        "cmnd": "76539221"
      },
      "fileURL": "talk42.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "495s",
      "date": "14/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951069"
            }
          ],
          "_id": "62ecb57027473f93e5951068"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595106b"
            }
          ],
          "_id": "62ecb57027473f93e595106a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595106d"
            }
          ],
          "_id": "62ecb57027473f93e595106c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595106f"
            }
          ],
          "_id": "62ecb57027473f93e595106e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951071"
            }
          ],
          "_id": "62ecb57027473f93e5951070"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951073"
            }
          ],
          "_id": "62ecb57027473f93e5951072"
        }
      ]
    },
    "_id": "62ecb57027473f93e595105d",
    "audioID": 42,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595105e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e595105f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951060"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951061"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951062"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951063"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951064"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951065"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951066"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951067"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "43",
        "name": "Lê Dương Cảnh",
        "cty": "ABC",
        "hotline": "52852339"
      },
      "customer": {
        "customerID": "43",
        "name": "Phạm Dương An",
        "phone": "11624018",
        "address": "Hà Nội",
        "cmnd": "55188673"
      },
      "fileURL": "talk43.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "534s",
      "date": "22/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951080"
            }
          ],
          "_id": "62ecb57027473f93e595107f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951082"
            }
          ],
          "_id": "62ecb57027473f93e5951081"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951084"
            }
          ],
          "_id": "62ecb57027473f93e5951083"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951086"
            }
          ],
          "_id": "62ecb57027473f93e5951085"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951088"
            }
          ],
          "_id": "62ecb57027473f93e5951087"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595108a"
            }
          ],
          "_id": "62ecb57027473f93e5951089"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951074",
    "audioID": 43,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951075"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951076"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951077"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951078"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951079"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595107a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e595107b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595107c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e595107d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595107e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "44",
        "name": "Trương Hải Thái Qúy",
        "cty": "ABC",
        "hotline": "75595504"
      },
      "customer": {
        "customerID": "44",
        "name": "Ngô Văn An",
        "phone": "57314746",
        "address": "Hà Nội",
        "cmnd": "23415621"
      },
      "fileURL": "talk44.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "131s",
      "date": "5/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951097"
            }
          ],
          "_id": "62ecb57027473f93e5951096"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951099"
            }
          ],
          "_id": "62ecb57027473f93e5951098"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595109b"
            }
          ],
          "_id": "62ecb57027473f93e595109a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595109d"
            }
          ],
          "_id": "62ecb57027473f93e595109c"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595109f"
            }
          ],
          "_id": "62ecb57027473f93e595109e"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510a1"
            }
          ],
          "_id": "62ecb57027473f93e59510a0"
        }
      ]
    },
    "_id": "62ecb57027473f93e595108b",
    "audioID": 44,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595108c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595108d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595108e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595108f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951090"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951091"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951092"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951093"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951094"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951095"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "45",
        "name": "Ngô Phương Khánh",
        "cty": "ABC",
        "hotline": "78148338"
      },
      "customer": {
        "customerID": "45",
        "name": "Lê Khánh Hồng",
        "phone": "39047086",
        "address": "Hà Nội",
        "cmnd": "57850848"
      },
      "fileURL": "talk45.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "250s",
      "date": "18/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59510ae"
            }
          ],
          "_id": "62ecb57027473f93e59510ad"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59510b0"
            }
          ],
          "_id": "62ecb57027473f93e59510af"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510b2"
            }
          ],
          "_id": "62ecb57027473f93e59510b1"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510b4"
            }
          ],
          "_id": "62ecb57027473f93e59510b3"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59510b6"
            }
          ],
          "_id": "62ecb57027473f93e59510b5"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59510b8"
            }
          ],
          "_id": "62ecb57027473f93e59510b7"
        }
      ]
    },
    "_id": "62ecb57027473f93e59510a2",
    "audioID": 45,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510a3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59510a4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59510a5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59510a6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59510a7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510a8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59510a9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59510aa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59510ab"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59510ac"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "46",
        "name": "Trương Khánh Duy",
        "cty": "ABC",
        "hotline": "56102455"
      },
      "customer": {
        "customerID": "46",
        "name": "Bùi Khánh Hồng",
        "phone": "34297968",
        "address": "Hà Nội",
        "cmnd": "29478885"
      },
      "fileURL": "talk46.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "182s",
      "date": "1/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510c5"
            }
          ],
          "_id": "62ecb57027473f93e59510c4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59510c7"
            }
          ],
          "_id": "62ecb57027473f93e59510c6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510c9"
            }
          ],
          "_id": "62ecb57027473f93e59510c8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510cb"
            }
          ],
          "_id": "62ecb57027473f93e59510ca"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510cd"
            }
          ],
          "_id": "62ecb57027473f93e59510cc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59510cf"
            }
          ],
          "_id": "62ecb57027473f93e59510ce"
        }
      ]
    },
    "_id": "62ecb57027473f93e59510b9",
    "audioID": 46,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510ba"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59510bb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59510bc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510bd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59510be"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59510bf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59510c0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59510c1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59510c2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59510c3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "47",
        "name": "Đặng Quốc Quyền",
        "cty": "ABC",
        "hotline": "85242058"
      },
      "customer": {
        "customerID": "47",
        "name": "Nguyễn Phương Thái Qúy",
        "phone": "41422868",
        "address": "Hà Nội",
        "cmnd": "34957203"
      },
      "fileURL": "talk47.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "40s",
      "date": "21/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510dc"
            }
          ],
          "_id": "62ecb57027473f93e59510db"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59510de"
            }
          ],
          "_id": "62ecb57027473f93e59510dd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510e0"
            }
          ],
          "_id": "62ecb57027473f93e59510df"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59510e2"
            }
          ],
          "_id": "62ecb57027473f93e59510e1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59510e4"
            }
          ],
          "_id": "62ecb57027473f93e59510e3"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510e6"
            }
          ],
          "_id": "62ecb57027473f93e59510e5"
        }
      ]
    },
    "_id": "62ecb57027473f93e59510d0",
    "audioID": 47,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59510d1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59510d2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59510d3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510d4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59510d5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59510d6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510d7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510d8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59510d9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59510da"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "48",
        "name": "Bùi Dương Dạ",
        "cty": "ABC",
        "hotline": "77205695"
      },
      "customer": {
        "customerID": "48",
        "name": "Nguyễn An Cảnh",
        "phone": "68489611",
        "address": "Hà Nội",
        "cmnd": "66539123"
      },
      "fileURL": "talk48.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "62s",
      "date": "8/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510f3"
            }
          ],
          "_id": "62ecb57027473f93e59510f2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510f5"
            }
          ],
          "_id": "62ecb57027473f93e59510f4"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59510f7"
            }
          ],
          "_id": "62ecb57027473f93e59510f6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510f9"
            }
          ],
          "_id": "62ecb57027473f93e59510f8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510fb"
            }
          ],
          "_id": "62ecb57027473f93e59510fa"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59510fd"
            }
          ],
          "_id": "62ecb57027473f93e59510fc"
        }
      ]
    },
    "_id": "62ecb57027473f93e59510e7",
    "audioID": 48,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59510e8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510e9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59510ea"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510eb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510ec"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59510ed"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59510ee"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510ef"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59510f0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59510f1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "49",
        "name": "Trần Hải Lợi",
        "cty": "ABC",
        "hotline": "68412521"
      },
      "customer": {
        "customerID": "49",
        "name": "Ngô Văn Thái Qúy",
        "phone": "37413679",
        "address": "Hà Nội",
        "cmnd": "98391149"
      },
      "fileURL": "talk49.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "218s",
      "date": "25/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595110a"
            }
          ],
          "_id": "62ecb57027473f93e5951109"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595110c"
            }
          ],
          "_id": "62ecb57027473f93e595110b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595110e"
            }
          ],
          "_id": "62ecb57027473f93e595110d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951110"
            }
          ],
          "_id": "62ecb57027473f93e595110f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951112"
            }
          ],
          "_id": "62ecb57027473f93e5951111"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951114"
            }
          ],
          "_id": "62ecb57027473f93e5951113"
        }
      ]
    },
    "_id": "62ecb57027473f93e59510fe",
    "audioID": 49,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59510ff"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951100"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951101"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951102"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951103"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951104"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951105"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951106"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951107"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951108"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "50",
        "name": "Bùi Quốc Hồng",
        "cty": "ABC",
        "hotline": "54858810"
      },
      "customer": {
        "customerID": "50",
        "name": "Phạm Thị Ánh",
        "phone": "53289547",
        "address": "Hà Nội",
        "cmnd": "45839791"
      },
      "fileURL": "talk50.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "118s",
      "date": "26/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951121"
            }
          ],
          "_id": "62ecb57027473f93e5951120"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951123"
            }
          ],
          "_id": "62ecb57027473f93e5951122"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951125"
            }
          ],
          "_id": "62ecb57027473f93e5951124"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951127"
            }
          ],
          "_id": "62ecb57027473f93e5951126"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951129"
            }
          ],
          "_id": "62ecb57027473f93e5951128"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595112b"
            }
          ],
          "_id": "62ecb57027473f93e595112a"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951115",
    "audioID": 50,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951116"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951117"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951118"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951119"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e595111a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595111b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595111c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595111d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595111e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595111f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "51",
        "name": "Trần Văn Lợi",
        "cty": "ABC",
        "hotline": "98020380"
      },
      "customer": {
        "customerID": "51",
        "name": "Bùi Minh Lợi",
        "phone": "29204835",
        "address": "Hà Nội",
        "cmnd": "22066877"
      },
      "fileURL": "talk51.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "512s",
      "date": "2/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951138"
            }
          ],
          "_id": "62ecb57027473f93e5951137"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595113a"
            }
          ],
          "_id": "62ecb57027473f93e5951139"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595113c"
            }
          ],
          "_id": "62ecb57027473f93e595113b"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595113e"
            }
          ],
          "_id": "62ecb57027473f93e595113d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951140"
            }
          ],
          "_id": "62ecb57027473f93e595113f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951142"
            }
          ],
          "_id": "62ecb57027473f93e5951141"
        }
      ]
    },
    "_id": "62ecb57027473f93e595112c",
    "audioID": 51,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595112d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595112e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595112f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951130"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951131"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951132"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951133"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951134"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951135"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951136"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "52",
        "name": "Bùi Dương Khánh",
        "cty": "ABC",
        "hotline": "25141851"
      },
      "customer": {
        "customerID": "52",
        "name": "Bùi Khánh Khánh",
        "phone": "49820378",
        "address": "Hà Nội",
        "cmnd": "14126976"
      },
      "fileURL": "talk52.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "334s",
      "date": "11/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595114f"
            }
          ],
          "_id": "62ecb57027473f93e595114e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951151"
            }
          ],
          "_id": "62ecb57027473f93e5951150"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951153"
            }
          ],
          "_id": "62ecb57027473f93e5951152"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951155"
            }
          ],
          "_id": "62ecb57027473f93e5951154"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951157"
            }
          ],
          "_id": "62ecb57027473f93e5951156"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951159"
            }
          ],
          "_id": "62ecb57027473f93e5951158"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951143",
    "audioID": 52,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951144"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951145"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951146"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951147"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951148"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951149"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595114a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595114b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e595114c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595114d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "53",
        "name": "Đặng Minh Khánh",
        "cty": "ABC",
        "hotline": "51888372"
      },
      "customer": {
        "customerID": "53",
        "name": "Phan Quốc Dạ",
        "phone": "63736014",
        "address": "Hà Nội",
        "cmnd": "84978970"
      },
      "fileURL": "talk53.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "28s",
      "date": "27/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951166"
            }
          ],
          "_id": "62ecb57027473f93e5951165"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951168"
            }
          ],
          "_id": "62ecb57027473f93e5951167"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595116a"
            }
          ],
          "_id": "62ecb57027473f93e5951169"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595116c"
            }
          ],
          "_id": "62ecb57027473f93e595116b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595116e"
            }
          ],
          "_id": "62ecb57027473f93e595116d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951170"
            }
          ],
          "_id": "62ecb57027473f93e595116f"
        }
      ]
    },
    "_id": "62ecb57027473f93e595115a",
    "audioID": 53,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595115b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595115c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595115d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595115e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595115f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951160"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951161"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951162"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951163"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951164"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "54",
        "name": "Phạm Phương Cảnh",
        "cty": "ABC",
        "hotline": "21824937"
      },
      "customer": {
        "customerID": "54",
        "name": "Phan An Hồng",
        "phone": "97776663",
        "address": "Hà Nội",
        "cmnd": "93615535"
      },
      "fileURL": "talk54.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "221s",
      "date": "12/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595117d"
            }
          ],
          "_id": "62ecb57027473f93e595117c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595117f"
            }
          ],
          "_id": "62ecb57027473f93e595117e"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951181"
            }
          ],
          "_id": "62ecb57027473f93e5951180"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951183"
            }
          ],
          "_id": "62ecb57027473f93e5951182"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951185"
            }
          ],
          "_id": "62ecb57027473f93e5951184"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951187"
            }
          ],
          "_id": "62ecb57027473f93e5951186"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951171",
    "audioID": 54,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951172"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951173"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951174"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951175"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951176"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951177"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951178"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951179"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595117a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595117b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "55",
        "name": "Phan Hải Duy",
        "cty": "ABC",
        "hotline": "99599792"
      },
      "customer": {
        "customerID": "55",
        "name": "Trương Minh Dạ",
        "phone": "67258124",
        "address": "Hà Nội",
        "cmnd": "79191095"
      },
      "fileURL": "talk55.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "496s",
      "date": "8/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951194"
            }
          ],
          "_id": "62ecb57027473f93e5951193"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951196"
            }
          ],
          "_id": "62ecb57027473f93e5951195"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951198"
            }
          ],
          "_id": "62ecb57027473f93e5951197"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595119a"
            }
          ],
          "_id": "62ecb57027473f93e5951199"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595119c"
            }
          ],
          "_id": "62ecb57027473f93e595119b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595119e"
            }
          ],
          "_id": "62ecb57027473f93e595119d"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951188",
    "audioID": 55,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951189"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595118a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595118b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595118c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595118d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e595118e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595118f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951190"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951191"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951192"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "56",
        "name": "Trần Phương Cảnh",
        "cty": "ABC",
        "hotline": "88194380"
      },
      "customer": {
        "customerID": "56",
        "name": "Ngô Văn Khánh",
        "phone": "71575337",
        "address": "Hà Nội",
        "cmnd": "28704834"
      },
      "fileURL": "talk56.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "260s",
      "date": "8/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59511ab"
            }
          ],
          "_id": "62ecb57027473f93e59511aa"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511ad"
            }
          ],
          "_id": "62ecb57027473f93e59511ac"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511af"
            }
          ],
          "_id": "62ecb57027473f93e59511ae"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59511b1"
            }
          ],
          "_id": "62ecb57027473f93e59511b0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59511b3"
            }
          ],
          "_id": "62ecb57027473f93e59511b2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511b5"
            }
          ],
          "_id": "62ecb57027473f93e59511b4"
        }
      ]
    },
    "_id": "62ecb57027473f93e595119f",
    "audioID": 56,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59511a0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59511a1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59511a2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59511a3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59511a4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59511a5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59511a6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59511a7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59511a8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59511a9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "57",
        "name": "Đặng An Dạ",
        "cty": "ABC",
        "hotline": "72682534"
      },
      "customer": {
        "customerID": "57",
        "name": "Đặng Dương Duy",
        "phone": "86424845",
        "address": "Hà Nội",
        "cmnd": "82554768"
      },
      "fileURL": "talk57.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "403s",
      "date": "7/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59511c2"
            }
          ],
          "_id": "62ecb57027473f93e59511c1"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511c4"
            }
          ],
          "_id": "62ecb57027473f93e59511c3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511c6"
            }
          ],
          "_id": "62ecb57027473f93e59511c5"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511c8"
            }
          ],
          "_id": "62ecb57027473f93e59511c7"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59511ca"
            }
          ],
          "_id": "62ecb57027473f93e59511c9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511cc"
            }
          ],
          "_id": "62ecb57027473f93e59511cb"
        }
      ]
    },
    "_id": "62ecb57027473f93e59511b6",
    "audioID": 57,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59511b7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59511b8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59511b9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59511ba"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59511bb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59511bc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59511bd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59511be"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59511bf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59511c0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "58",
        "name": "Lê Văn Thái Qúy",
        "cty": "ABC",
        "hotline": "17675463"
      },
      "customer": {
        "customerID": "58",
        "name": "Phạm Khánh Cảnh",
        "phone": "77249887",
        "address": "Hà Nội",
        "cmnd": "34134138"
      },
      "fileURL": "talk58.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "381s",
      "date": "19/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511d9"
            }
          ],
          "_id": "62ecb57027473f93e59511d8"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59511db"
            }
          ],
          "_id": "62ecb57027473f93e59511da"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511dd"
            }
          ],
          "_id": "62ecb57027473f93e59511dc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59511df"
            }
          ],
          "_id": "62ecb57027473f93e59511de"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511e1"
            }
          ],
          "_id": "62ecb57027473f93e59511e0"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511e3"
            }
          ],
          "_id": "62ecb57027473f93e59511e2"
        }
      ]
    },
    "_id": "62ecb57027473f93e59511cd",
    "audioID": 58,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59511ce"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59511cf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59511d0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59511d1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59511d2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59511d3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59511d4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59511d5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59511d6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59511d7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "59",
        "name": "Phạm Minh Hồng",
        "cty": "ABC",
        "hotline": "63623026"
      },
      "customer": {
        "customerID": "59",
        "name": "Đặng Phương Ánh",
        "phone": "30425940",
        "address": "Hà Nội",
        "cmnd": "62505337"
      },
      "fileURL": "talk59.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "211s",
      "date": "17/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59511f0"
            }
          ],
          "_id": "62ecb57027473f93e59511ef"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59511f2"
            }
          ],
          "_id": "62ecb57027473f93e59511f1"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59511f4"
            }
          ],
          "_id": "62ecb57027473f93e59511f3"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59511f6"
            }
          ],
          "_id": "62ecb57027473f93e59511f5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59511f8"
            }
          ],
          "_id": "62ecb57027473f93e59511f7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59511fa"
            }
          ],
          "_id": "62ecb57027473f93e59511f9"
        }
      ]
    },
    "_id": "62ecb57027473f93e59511e4",
    "audioID": 59,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59511e5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59511e6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59511e7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59511e8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59511e9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59511ea"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59511eb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59511ec"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59511ed"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59511ee"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "60",
        "name": "Huỳnh Minh Thái Qúy",
        "cty": "ABC",
        "hotline": "91259272"
      },
      "customer": {
        "customerID": "60",
        "name": "Bùi An Lợi",
        "phone": "85269249",
        "address": "Hà Nội",
        "cmnd": "31742829"
      },
      "fileURL": "talk60.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "260s",
      "date": "1/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951207"
            }
          ],
          "_id": "62ecb57027473f93e5951206"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951209"
            }
          ],
          "_id": "62ecb57027473f93e5951208"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595120b"
            }
          ],
          "_id": "62ecb57027473f93e595120a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595120d"
            }
          ],
          "_id": "62ecb57027473f93e595120c"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595120f"
            }
          ],
          "_id": "62ecb57027473f93e595120e"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951211"
            }
          ],
          "_id": "62ecb57027473f93e5951210"
        }
      ]
    },
    "_id": "62ecb57027473f93e59511fb",
    "audioID": 60,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59511fc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59511fd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59511fe"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59511ff"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951200"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951201"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951202"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951203"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951204"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951205"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "61",
        "name": "Nguyễn Quốc Dạ",
        "cty": "ABC",
        "hotline": "37053320"
      },
      "customer": {
        "customerID": "61",
        "name": "Trương An Thái Qúy",
        "phone": "18204125",
        "address": "Hà Nội",
        "cmnd": "35033866"
      },
      "fileURL": "talk61.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "329s",
      "date": "14/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595121e"
            }
          ],
          "_id": "62ecb57027473f93e595121d"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951220"
            }
          ],
          "_id": "62ecb57027473f93e595121f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951222"
            }
          ],
          "_id": "62ecb57027473f93e5951221"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951224"
            }
          ],
          "_id": "62ecb57027473f93e5951223"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951226"
            }
          ],
          "_id": "62ecb57027473f93e5951225"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951228"
            }
          ],
          "_id": "62ecb57027473f93e5951227"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951212",
    "audioID": 61,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951213"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951214"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951215"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951216"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951217"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951218"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951219"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595121a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e595121b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595121c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "62",
        "name": "Phạm Minh Quyền",
        "cty": "ABC",
        "hotline": "77340246"
      },
      "customer": {
        "customerID": "62",
        "name": "Bùi Phương Thái Qúy",
        "phone": "78634852",
        "address": "Hà Nội",
        "cmnd": "66670641"
      },
      "fileURL": "talk62.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "43s",
      "date": "20/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951235"
            }
          ],
          "_id": "62ecb57027473f93e5951234"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951237"
            }
          ],
          "_id": "62ecb57027473f93e5951236"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951239"
            }
          ],
          "_id": "62ecb57027473f93e5951238"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595123b"
            }
          ],
          "_id": "62ecb57027473f93e595123a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595123d"
            }
          ],
          "_id": "62ecb57027473f93e595123c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595123f"
            }
          ],
          "_id": "62ecb57027473f93e595123e"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951229",
    "audioID": 62,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595122a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595122b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595122c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595122d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595122e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595122f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951230"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951231"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951232"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951233"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "63",
        "name": "Phan Thị Lợi",
        "cty": "ABC",
        "hotline": "85144789"
      },
      "customer": {
        "customerID": "63",
        "name": "Trương Minh Cảnh",
        "phone": "95028852",
        "address": "Hà Nội",
        "cmnd": "86862897"
      },
      "fileURL": "talk63.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "492s",
      "date": "21/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595124c"
            }
          ],
          "_id": "62ecb57027473f93e595124b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595124e"
            }
          ],
          "_id": "62ecb57027473f93e595124d"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951250"
            }
          ],
          "_id": "62ecb57027473f93e595124f"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951252"
            }
          ],
          "_id": "62ecb57027473f93e5951251"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951254"
            }
          ],
          "_id": "62ecb57027473f93e5951253"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951256"
            }
          ],
          "_id": "62ecb57027473f93e5951255"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951240",
    "audioID": 63,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951241"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951242"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951243"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951244"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951245"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951246"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951247"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951248"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951249"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595124a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "64",
        "name": "Trần Hải Thái Qúy",
        "cty": "ABC",
        "hotline": "67197849"
      },
      "customer": {
        "customerID": "64",
        "name": "Trương Hữu An",
        "phone": "71567364",
        "address": "Hà Nội",
        "cmnd": "48261549"
      },
      "fileURL": "talk64.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "588s",
      "date": "29/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951263"
            }
          ],
          "_id": "62ecb57027473f93e5951262"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951265"
            }
          ],
          "_id": "62ecb57027473f93e5951264"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951267"
            }
          ],
          "_id": "62ecb57027473f93e5951266"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951269"
            }
          ],
          "_id": "62ecb57027473f93e5951268"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595126b"
            }
          ],
          "_id": "62ecb57027473f93e595126a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595126d"
            }
          ],
          "_id": "62ecb57027473f93e595126c"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951257",
    "audioID": 64,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951258"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951259"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595125a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595125b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595125c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595125d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595125e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595125f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951260"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951261"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "65",
        "name": "Trần Dương Quyền",
        "cty": "ABC",
        "hotline": "62097641"
      },
      "customer": {
        "customerID": "65",
        "name": "Phan Minh Hồng",
        "phone": "54720293",
        "address": "Hà Nội",
        "cmnd": "91743711"
      },
      "fileURL": "talk65.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "203s",
      "date": "7/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595127a"
            }
          ],
          "_id": "62ecb57027473f93e5951279"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595127c"
            }
          ],
          "_id": "62ecb57027473f93e595127b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595127e"
            }
          ],
          "_id": "62ecb57027473f93e595127d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951280"
            }
          ],
          "_id": "62ecb57027473f93e595127f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951282"
            }
          ],
          "_id": "62ecb57027473f93e5951281"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951284"
            }
          ],
          "_id": "62ecb57027473f93e5951283"
        }
      ]
    },
    "_id": "62ecb57027473f93e595126e",
    "audioID": 65,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e595126f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951270"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951271"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951272"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951273"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951274"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951275"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951276"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951277"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951278"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "66",
        "name": "Trần An Hồng",
        "cty": "ABC",
        "hotline": "86103893"
      },
      "customer": {
        "customerID": "66",
        "name": "Ngô An An",
        "phone": "75574898",
        "address": "Hà Nội",
        "cmnd": "28415250"
      },
      "fileURL": "talk66.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "77s",
      "date": "24/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951291"
            }
          ],
          "_id": "62ecb57027473f93e5951290"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951293"
            }
          ],
          "_id": "62ecb57027473f93e5951292"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951295"
            }
          ],
          "_id": "62ecb57027473f93e5951294"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951297"
            }
          ],
          "_id": "62ecb57027473f93e5951296"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951299"
            }
          ],
          "_id": "62ecb57027473f93e5951298"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595129b"
            }
          ],
          "_id": "62ecb57027473f93e595129a"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951285",
    "audioID": 66,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951286"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951287"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951288"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951289"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595128a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595128b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595128c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595128d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595128e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595128f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "67",
        "name": "Ngô Hải Khánh",
        "cty": "ABC",
        "hotline": "48512448"
      },
      "customer": {
        "customerID": "67",
        "name": "Trần Dương Khánh",
        "phone": "35403713",
        "address": "Hà Nội",
        "cmnd": "74037950"
      },
      "fileURL": "talk67.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "87s",
      "date": "23/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512a8"
            }
          ],
          "_id": "62ecb57027473f93e59512a7"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512aa"
            }
          ],
          "_id": "62ecb57027473f93e59512a9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512ac"
            }
          ],
          "_id": "62ecb57027473f93e59512ab"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59512ae"
            }
          ],
          "_id": "62ecb57027473f93e59512ad"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512b0"
            }
          ],
          "_id": "62ecb57027473f93e59512af"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512b2"
            }
          ],
          "_id": "62ecb57027473f93e59512b1"
        }
      ]
    },
    "_id": "62ecb57027473f93e595129c",
    "audioID": 67,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595129d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595129e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595129f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59512a0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512a1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512a2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512a3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59512a4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59512a5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59512a6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "68",
        "name": "Phạm Dương Cảnh",
        "cty": "ABC",
        "hotline": "34731839"
      },
      "customer": {
        "customerID": "68",
        "name": "Nguyễn Hải Cảnh",
        "phone": "34671188",
        "address": "Hà Nội",
        "cmnd": "39667080"
      },
      "fileURL": "talk68.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "333s",
      "date": "8/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512bf"
            }
          ],
          "_id": "62ecb57027473f93e59512be"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512c1"
            }
          ],
          "_id": "62ecb57027473f93e59512c0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59512c3"
            }
          ],
          "_id": "62ecb57027473f93e59512c2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512c5"
            }
          ],
          "_id": "62ecb57027473f93e59512c4"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59512c7"
            }
          ],
          "_id": "62ecb57027473f93e59512c6"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512c9"
            }
          ],
          "_id": "62ecb57027473f93e59512c8"
        }
      ]
    },
    "_id": "62ecb57027473f93e59512b3",
    "audioID": 68,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59512b4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59512b5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59512b6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59512b7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59512b8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59512b9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512ba"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512bb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59512bc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59512bd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "69",
        "name": "Phạm Khánh Quyền",
        "cty": "ABC",
        "hotline": "94174667"
      },
      "customer": {
        "customerID": "69",
        "name": "Lê Khánh Khánh",
        "phone": "70752072",
        "address": "Hà Nội",
        "cmnd": "29443461"
      },
      "fileURL": "talk69.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "138s",
      "date": "27/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59512d6"
            }
          ],
          "_id": "62ecb57027473f93e59512d5"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59512d8"
            }
          ],
          "_id": "62ecb57027473f93e59512d7"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512da"
            }
          ],
          "_id": "62ecb57027473f93e59512d9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512dc"
            }
          ],
          "_id": "62ecb57027473f93e59512db"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512de"
            }
          ],
          "_id": "62ecb57027473f93e59512dd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512e0"
            }
          ],
          "_id": "62ecb57027473f93e59512df"
        }
      ]
    },
    "_id": "62ecb57027473f93e59512ca",
    "audioID": 69,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59512cb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512cc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59512cd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59512ce"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512cf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59512d0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59512d1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59512d2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512d3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59512d4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "70",
        "name": "Phan Phương Duy",
        "cty": "ABC",
        "hotline": "92842829"
      },
      "customer": {
        "customerID": "70",
        "name": "Ngô Phương Khánh",
        "phone": "66288901",
        "address": "Hà Nội",
        "cmnd": "38023061"
      },
      "fileURL": "talk70.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "74s",
      "date": "11/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512ed"
            }
          ],
          "_id": "62ecb57027473f93e59512ec"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59512ef"
            }
          ],
          "_id": "62ecb57027473f93e59512ee"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512f1"
            }
          ],
          "_id": "62ecb57027473f93e59512f0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512f3"
            }
          ],
          "_id": "62ecb57027473f93e59512f2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512f5"
            }
          ],
          "_id": "62ecb57027473f93e59512f4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59512f7"
            }
          ],
          "_id": "62ecb57027473f93e59512f6"
        }
      ]
    },
    "_id": "62ecb57027473f93e59512e1",
    "audioID": 70,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512e2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59512e3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512e4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59512e5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59512e6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59512e7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512e8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59512e9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59512ea"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59512eb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "71",
        "name": "Trương Khánh Duy",
        "cty": "ABC",
        "hotline": "85051459"
      },
      "customer": {
        "customerID": "71",
        "name": "Trương Hữu Khánh",
        "phone": "15447177",
        "address": "Hà Nội",
        "cmnd": "36010497"
      },
      "fileURL": "talk71.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "122s",
      "date": "23/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951304"
            }
          ],
          "_id": "62ecb57027473f93e5951303"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951306"
            }
          ],
          "_id": "62ecb57027473f93e5951305"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951308"
            }
          ],
          "_id": "62ecb57027473f93e5951307"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595130a"
            }
          ],
          "_id": "62ecb57027473f93e5951309"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595130c"
            }
          ],
          "_id": "62ecb57027473f93e595130b"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595130e"
            }
          ],
          "_id": "62ecb57027473f93e595130d"
        }
      ]
    },
    "_id": "62ecb57027473f93e59512f8",
    "audioID": 71,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59512f9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512fa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59512fb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59512fc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512fd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59512fe"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59512ff"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951300"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951301"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951302"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "72",
        "name": "Phạm Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "36604387"
      },
      "customer": {
        "customerID": "72",
        "name": "Nguyễn Dương Quyền",
        "phone": "55094608",
        "address": "Hà Nội",
        "cmnd": "42366964"
      },
      "fileURL": "talk72.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "450s",
      "date": "8/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595131b"
            }
          ],
          "_id": "62ecb57027473f93e595131a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595131d"
            }
          ],
          "_id": "62ecb57027473f93e595131c"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595131f"
            }
          ],
          "_id": "62ecb57027473f93e595131e"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951321"
            }
          ],
          "_id": "62ecb57027473f93e5951320"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951323"
            }
          ],
          "_id": "62ecb57027473f93e5951322"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951325"
            }
          ],
          "_id": "62ecb57027473f93e5951324"
        }
      ]
    },
    "_id": "62ecb57027473f93e595130f",
    "audioID": 72,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951310"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951311"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951312"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951313"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951314"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951315"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951316"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951317"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951318"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951319"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "73",
        "name": "Nguyễn Hải Dạ",
        "cty": "ABC",
        "hotline": "71543018"
      },
      "customer": {
        "customerID": "73",
        "name": "Trương Thị Ánh",
        "phone": "16722905",
        "address": "Hà Nội",
        "cmnd": "65963916"
      },
      "fileURL": "talk73.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "406s",
      "date": "26/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951332"
            }
          ],
          "_id": "62ecb57027473f93e5951331"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951334"
            }
          ],
          "_id": "62ecb57027473f93e5951333"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951336"
            }
          ],
          "_id": "62ecb57027473f93e5951335"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951338"
            }
          ],
          "_id": "62ecb57027473f93e5951337"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595133a"
            }
          ],
          "_id": "62ecb57027473f93e5951339"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595133c"
            }
          ],
          "_id": "62ecb57027473f93e595133b"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951326",
    "audioID": 73,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951327"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951328"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951329"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595132a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595132b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595132c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595132d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595132e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595132f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951330"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "74",
        "name": "Lê Khánh Khánh",
        "cty": "ABC",
        "hotline": "43174916"
      },
      "customer": {
        "customerID": "74",
        "name": "Bùi Hải Cảnh",
        "phone": "98326028",
        "address": "Hà Nội",
        "cmnd": "23741459"
      },
      "fileURL": "talk74.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "408s",
      "date": "10/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951349"
            }
          ],
          "_id": "62ecb57027473f93e5951348"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595134b"
            }
          ],
          "_id": "62ecb57027473f93e595134a"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595134d"
            }
          ],
          "_id": "62ecb57027473f93e595134c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595134f"
            }
          ],
          "_id": "62ecb57027473f93e595134e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951351"
            }
          ],
          "_id": "62ecb57027473f93e5951350"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951353"
            }
          ],
          "_id": "62ecb57027473f93e5951352"
        }
      ]
    },
    "_id": "62ecb57027473f93e595133d",
    "audioID": 74,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595133e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595133f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951340"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951341"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951342"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951343"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951344"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951345"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951346"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951347"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "75",
        "name": "Ngô Hữu An",
        "cty": "ABC",
        "hotline": "97079020"
      },
      "customer": {
        "customerID": "75",
        "name": "Huỳnh Dương Cảnh",
        "phone": "22623260",
        "address": "Hà Nội",
        "cmnd": "48529968"
      },
      "fileURL": "talk75.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "51s",
      "date": "13/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951360"
            }
          ],
          "_id": "62ecb57027473f93e595135f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951362"
            }
          ],
          "_id": "62ecb57027473f93e5951361"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951364"
            }
          ],
          "_id": "62ecb57027473f93e5951363"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951366"
            }
          ],
          "_id": "62ecb57027473f93e5951365"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951368"
            }
          ],
          "_id": "62ecb57027473f93e5951367"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595136a"
            }
          ],
          "_id": "62ecb57027473f93e5951369"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951354",
    "audioID": 75,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951355"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951356"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951357"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951358"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951359"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595135a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e595135b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595135c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e595135d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595135e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "76",
        "name": "Phạm Quốc Thái Qúy",
        "cty": "ABC",
        "hotline": "20818058"
      },
      "customer": {
        "customerID": "76",
        "name": "Đặng Hải Hồng",
        "phone": "10017356",
        "address": "Hà Nội",
        "cmnd": "68803059"
      },
      "fileURL": "talk76.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "415s",
      "date": "18/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951377"
            }
          ],
          "_id": "62ecb57027473f93e5951376"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951379"
            }
          ],
          "_id": "62ecb57027473f93e5951378"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595137b"
            }
          ],
          "_id": "62ecb57027473f93e595137a"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595137d"
            }
          ],
          "_id": "62ecb57027473f93e595137c"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595137f"
            }
          ],
          "_id": "62ecb57027473f93e595137e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951381"
            }
          ],
          "_id": "62ecb57027473f93e5951380"
        }
      ]
    },
    "_id": "62ecb57027473f93e595136b",
    "audioID": 76,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595136c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595136d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595136e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595136f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951370"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951371"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951372"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951373"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951374"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951375"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "77",
        "name": "Đặng An Hồng",
        "cty": "ABC",
        "hotline": "53648012"
      },
      "customer": {
        "customerID": "77",
        "name": "Trương Quốc An",
        "phone": "31228847",
        "address": "Hà Nội",
        "cmnd": "41660669"
      },
      "fileURL": "talk77.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "560s",
      "date": "21/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595138e"
            }
          ],
          "_id": "62ecb57027473f93e595138d"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951390"
            }
          ],
          "_id": "62ecb57027473f93e595138f"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951392"
            }
          ],
          "_id": "62ecb57027473f93e5951391"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951394"
            }
          ],
          "_id": "62ecb57027473f93e5951393"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951396"
            }
          ],
          "_id": "62ecb57027473f93e5951395"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951398"
            }
          ],
          "_id": "62ecb57027473f93e5951397"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951382",
    "audioID": 77,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951383"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951384"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951385"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951386"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951387"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951388"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951389"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595138a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595138b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595138c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "78",
        "name": "Phạm Hải Thái Qúy",
        "cty": "ABC",
        "hotline": "53143352"
      },
      "customer": {
        "customerID": "78",
        "name": "Phan Hữu Lợi",
        "phone": "40422697",
        "address": "Hà Nội",
        "cmnd": "19788252"
      },
      "fileURL": "talk78.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "584s",
      "date": "17/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59513a5"
            }
          ],
          "_id": "62ecb57027473f93e59513a4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59513a7"
            }
          ],
          "_id": "62ecb57027473f93e59513a6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59513a9"
            }
          ],
          "_id": "62ecb57027473f93e59513a8"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513ab"
            }
          ],
          "_id": "62ecb57027473f93e59513aa"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513ad"
            }
          ],
          "_id": "62ecb57027473f93e59513ac"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513af"
            }
          ],
          "_id": "62ecb57027473f93e59513ae"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951399",
    "audioID": 78,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595139a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595139b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595139c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e595139d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595139e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595139f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513a0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59513a1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513a2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513a3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "79",
        "name": "Trương Khánh Quyền",
        "cty": "ABC",
        "hotline": "11238432"
      },
      "customer": {
        "customerID": "79",
        "name": "Bùi Khánh Quyền",
        "phone": "39809824",
        "address": "Hà Nội",
        "cmnd": "28213243"
      },
      "fileURL": "talk79.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "175s",
      "date": "27/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59513bc"
            }
          ],
          "_id": "62ecb57027473f93e59513bb"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513be"
            }
          ],
          "_id": "62ecb57027473f93e59513bd"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513c0"
            }
          ],
          "_id": "62ecb57027473f93e59513bf"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59513c2"
            }
          ],
          "_id": "62ecb57027473f93e59513c1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513c4"
            }
          ],
          "_id": "62ecb57027473f93e59513c3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513c6"
            }
          ],
          "_id": "62ecb57027473f93e59513c5"
        }
      ]
    },
    "_id": "62ecb57027473f93e59513b0",
    "audioID": 79,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59513b1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59513b2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513b3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59513b4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59513b5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513b6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59513b7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59513b8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59513b9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513ba"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "80",
        "name": "Lê Dương Quyền",
        "cty": "ABC",
        "hotline": "51475671"
      },
      "customer": {
        "customerID": "80",
        "name": "Đặng Dương An",
        "phone": "22686297",
        "address": "Hà Nội",
        "cmnd": "84664854"
      },
      "fileURL": "talk80.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "246s",
      "date": "23/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513d3"
            }
          ],
          "_id": "62ecb57027473f93e59513d2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513d5"
            }
          ],
          "_id": "62ecb57027473f93e59513d4"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513d7"
            }
          ],
          "_id": "62ecb57027473f93e59513d6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59513d9"
            }
          ],
          "_id": "62ecb57027473f93e59513d8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513db"
            }
          ],
          "_id": "62ecb57027473f93e59513da"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513dd"
            }
          ],
          "_id": "62ecb57027473f93e59513dc"
        }
      ]
    },
    "_id": "62ecb57027473f93e59513c7",
    "audioID": 80,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59513c8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59513c9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59513ca"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513cb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59513cc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59513cd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59513ce"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59513cf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59513d0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513d1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "81",
        "name": "Trần Văn Khánh",
        "cty": "ABC",
        "hotline": "89302909"
      },
      "customer": {
        "customerID": "81",
        "name": "Ngô Văn Thái Qúy",
        "phone": "74056663",
        "address": "Hà Nội",
        "cmnd": "77074706"
      },
      "fileURL": "talk81.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "534s",
      "date": "22/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513ea"
            }
          ],
          "_id": "62ecb57027473f93e59513e9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513ec"
            }
          ],
          "_id": "62ecb57027473f93e59513eb"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513ee"
            }
          ],
          "_id": "62ecb57027473f93e59513ed"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59513f0"
            }
          ],
          "_id": "62ecb57027473f93e59513ef"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59513f2"
            }
          ],
          "_id": "62ecb57027473f93e59513f1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59513f4"
            }
          ],
          "_id": "62ecb57027473f93e59513f3"
        }
      ]
    },
    "_id": "62ecb57027473f93e59513de",
    "audioID": 81,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59513df"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59513e0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59513e1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513e2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59513e3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59513e4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59513e5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59513e6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59513e7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513e8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "82",
        "name": "Đặng Hải An",
        "cty": "ABC",
        "hotline": "75816022"
      },
      "customer": {
        "customerID": "82",
        "name": "Huỳnh Hải Duy",
        "phone": "36185480",
        "address": "Hà Nội",
        "cmnd": "78550674"
      },
      "fileURL": "talk82.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "188s",
      "date": "23/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951401"
            }
          ],
          "_id": "62ecb57027473f93e5951400"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951403"
            }
          ],
          "_id": "62ecb57027473f93e5951402"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951405"
            }
          ],
          "_id": "62ecb57027473f93e5951404"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951407"
            }
          ],
          "_id": "62ecb57027473f93e5951406"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951409"
            }
          ],
          "_id": "62ecb57027473f93e5951408"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595140b"
            }
          ],
          "_id": "62ecb57027473f93e595140a"
        }
      ]
    },
    "_id": "62ecb57027473f93e59513f5",
    "audioID": 82,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59513f6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59513f7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59513f8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59513f9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513fa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59513fb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59513fc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59513fd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59513fe"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59513ff"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "83",
        "name": "Nguyễn Minh Thái Qúy",
        "cty": "ABC",
        "hotline": "88607351"
      },
      "customer": {
        "customerID": "83",
        "name": "Lê Thị Khánh",
        "phone": "52850977",
        "address": "Hà Nội",
        "cmnd": "82565875"
      },
      "fileURL": "talk83.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "464s",
      "date": "8/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951418"
            }
          ],
          "_id": "62ecb57027473f93e5951417"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595141a"
            }
          ],
          "_id": "62ecb57027473f93e5951419"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595141c"
            }
          ],
          "_id": "62ecb57027473f93e595141b"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595141e"
            }
          ],
          "_id": "62ecb57027473f93e595141d"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951420"
            }
          ],
          "_id": "62ecb57027473f93e595141f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951422"
            }
          ],
          "_id": "62ecb57027473f93e5951421"
        }
      ]
    },
    "_id": "62ecb57027473f93e595140c",
    "audioID": 83,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595140d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595140e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595140f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951410"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951411"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951412"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951413"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951414"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951415"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951416"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "84",
        "name": "Lê Quốc Lợi",
        "cty": "ABC",
        "hotline": "50704773"
      },
      "customer": {
        "customerID": "84",
        "name": "Nguyễn Quốc Khánh",
        "phone": "67078041",
        "address": "Hà Nội",
        "cmnd": "48990087"
      },
      "fileURL": "talk84.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "353s",
      "date": "14/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595142f"
            }
          ],
          "_id": "62ecb57027473f93e595142e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951431"
            }
          ],
          "_id": "62ecb57027473f93e5951430"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951433"
            }
          ],
          "_id": "62ecb57027473f93e5951432"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951435"
            }
          ],
          "_id": "62ecb57027473f93e5951434"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951437"
            }
          ],
          "_id": "62ecb57027473f93e5951436"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951439"
            }
          ],
          "_id": "62ecb57027473f93e5951438"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951423",
    "audioID": 84,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951424"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951425"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951426"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951427"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951428"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951429"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595142a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595142b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595142c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595142d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "85",
        "name": "Nguyễn Phương Duy",
        "cty": "ABC",
        "hotline": "87551687"
      },
      "customer": {
        "customerID": "85",
        "name": "Huỳnh Phương Quyền",
        "phone": "17709377",
        "address": "Hà Nội",
        "cmnd": "24475380"
      },
      "fileURL": "talk85.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "445s",
      "date": "11/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951446"
            }
          ],
          "_id": "62ecb57027473f93e5951445"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951448"
            }
          ],
          "_id": "62ecb57027473f93e5951447"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595144a"
            }
          ],
          "_id": "62ecb57027473f93e5951449"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595144c"
            }
          ],
          "_id": "62ecb57027473f93e595144b"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595144e"
            }
          ],
          "_id": "62ecb57027473f93e595144d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951450"
            }
          ],
          "_id": "62ecb57027473f93e595144f"
        }
      ]
    },
    "_id": "62ecb57027473f93e595143a",
    "audioID": 85,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595143b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595143c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595143d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595143e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595143f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951440"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951441"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951442"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951443"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951444"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "86",
        "name": "Phạm Quốc Quyền",
        "cty": "ABC",
        "hotline": "66088567"
      },
      "customer": {
        "customerID": "86",
        "name": "Đặng Văn Dạ",
        "phone": "50188259",
        "address": "Hà Nội",
        "cmnd": "81168051"
      },
      "fileURL": "talk86.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "315s",
      "date": "23/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595145d"
            }
          ],
          "_id": "62ecb57027473f93e595145c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595145f"
            }
          ],
          "_id": "62ecb57027473f93e595145e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951461"
            }
          ],
          "_id": "62ecb57027473f93e5951460"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951463"
            }
          ],
          "_id": "62ecb57027473f93e5951462"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951465"
            }
          ],
          "_id": "62ecb57027473f93e5951464"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951467"
            }
          ],
          "_id": "62ecb57027473f93e5951466"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951451",
    "audioID": 86,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951452"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951453"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951454"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951455"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951456"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951457"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951458"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951459"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595145a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595145b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "87",
        "name": "Huỳnh Hữu Ánh",
        "cty": "ABC",
        "hotline": "70298191"
      },
      "customer": {
        "customerID": "87",
        "name": "Lê Phương Quyền",
        "phone": "93261763",
        "address": "Hà Nội",
        "cmnd": "24013821"
      },
      "fileURL": "talk87.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "183s",
      "date": "6/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951474"
            }
          ],
          "_id": "62ecb57027473f93e5951473"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951476"
            }
          ],
          "_id": "62ecb57027473f93e5951475"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951478"
            }
          ],
          "_id": "62ecb57027473f93e5951477"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595147a"
            }
          ],
          "_id": "62ecb57027473f93e5951479"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595147c"
            }
          ],
          "_id": "62ecb57027473f93e595147b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595147e"
            }
          ],
          "_id": "62ecb57027473f93e595147d"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951468",
    "audioID": 87,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951469"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e595146a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595146b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595146c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595146d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595146e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595146f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951470"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951471"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951472"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "88",
        "name": "Đặng Dương Hồng",
        "cty": "ABC",
        "hotline": "89182409"
      },
      "customer": {
        "customerID": "88",
        "name": "Phan Phương Cảnh",
        "phone": "84956514",
        "address": "Hà Nội",
        "cmnd": "32854693"
      },
      "fileURL": "talk88.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "546s",
      "date": "6/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595148b"
            }
          ],
          "_id": "62ecb57027473f93e595148a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595148d"
            }
          ],
          "_id": "62ecb57027473f93e595148c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595148f"
            }
          ],
          "_id": "62ecb57027473f93e595148e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951491"
            }
          ],
          "_id": "62ecb57027473f93e5951490"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951493"
            }
          ],
          "_id": "62ecb57027473f93e5951492"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951495"
            }
          ],
          "_id": "62ecb57027473f93e5951494"
        }
      ]
    },
    "_id": "62ecb57027473f93e595147f",
    "audioID": 88,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951480"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951481"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951482"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951483"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951484"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951485"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951486"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951487"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951488"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951489"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "89",
        "name": "Lê Minh An",
        "cty": "ABC",
        "hotline": "22731453"
      },
      "customer": {
        "customerID": "89",
        "name": "Đặng Hải Hồng",
        "phone": "69567112",
        "address": "Hà Nội",
        "cmnd": "28377413"
      },
      "fileURL": "talk89.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "161s",
      "date": "20/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514a2"
            }
          ],
          "_id": "62ecb57027473f93e59514a1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514a4"
            }
          ],
          "_id": "62ecb57027473f93e59514a3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514a6"
            }
          ],
          "_id": "62ecb57027473f93e59514a5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514a8"
            }
          ],
          "_id": "62ecb57027473f93e59514a7"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59514aa"
            }
          ],
          "_id": "62ecb57027473f93e59514a9"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514ac"
            }
          ],
          "_id": "62ecb57027473f93e59514ab"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951496",
    "audioID": 89,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951497"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951498"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951499"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595149a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595149b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595149c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595149d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595149e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595149f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59514a0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "90",
        "name": "Đặng Dương An",
        "cty": "ABC",
        "hotline": "83700530"
      },
      "customer": {
        "customerID": "90",
        "name": "Ngô Minh Lợi",
        "phone": "96542823",
        "address": "Hà Nội",
        "cmnd": "13166990"
      },
      "fileURL": "talk90.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "6s",
      "date": "3/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59514b9"
            }
          ],
          "_id": "62ecb57027473f93e59514b8"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514bb"
            }
          ],
          "_id": "62ecb57027473f93e59514ba"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514bd"
            }
          ],
          "_id": "62ecb57027473f93e59514bc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514bf"
            }
          ],
          "_id": "62ecb57027473f93e59514be"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59514c1"
            }
          ],
          "_id": "62ecb57027473f93e59514c0"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59514c3"
            }
          ],
          "_id": "62ecb57027473f93e59514c2"
        }
      ]
    },
    "_id": "62ecb57027473f93e59514ad",
    "audioID": 90,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59514ae"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59514af"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59514b0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59514b1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59514b2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59514b3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59514b4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59514b5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59514b6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59514b7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "91",
        "name": "Huỳnh An Duy",
        "cty": "ABC",
        "hotline": "84949731"
      },
      "customer": {
        "customerID": "91",
        "name": "Phan Minh Cảnh",
        "phone": "93596127",
        "address": "Hà Nội",
        "cmnd": "25931157"
      },
      "fileURL": "talk91.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "332s",
      "date": "4/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514d0"
            }
          ],
          "_id": "62ecb57027473f93e59514cf"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59514d2"
            }
          ],
          "_id": "62ecb57027473f93e59514d1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59514d4"
            }
          ],
          "_id": "62ecb57027473f93e59514d3"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59514d6"
            }
          ],
          "_id": "62ecb57027473f93e59514d5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514d8"
            }
          ],
          "_id": "62ecb57027473f93e59514d7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514da"
            }
          ],
          "_id": "62ecb57027473f93e59514d9"
        }
      ]
    },
    "_id": "62ecb57027473f93e59514c4",
    "audioID": 91,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59514c5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59514c6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59514c7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59514c8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59514c9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e59514ca"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59514cb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59514cc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59514cd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59514ce"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "92",
        "name": "Lê Hữu Quyền",
        "cty": "ABC",
        "hotline": "66385767"
      },
      "customer": {
        "customerID": "92",
        "name": "Nguyễn Phương An",
        "phone": "95242047",
        "address": "Hà Nội",
        "cmnd": "74374478"
      },
      "fileURL": "talk92.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "184s",
      "date": "5/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514e7"
            }
          ],
          "_id": "62ecb57027473f93e59514e6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59514e9"
            }
          ],
          "_id": "62ecb57027473f93e59514e8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514eb"
            }
          ],
          "_id": "62ecb57027473f93e59514ea"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59514ed"
            }
          ],
          "_id": "62ecb57027473f93e59514ec"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59514ef"
            }
          ],
          "_id": "62ecb57027473f93e59514ee"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59514f1"
            }
          ],
          "_id": "62ecb57027473f93e59514f0"
        }
      ]
    },
    "_id": "62ecb57027473f93e59514db",
    "audioID": 92,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59514dc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59514dd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59514de"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59514df"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59514e0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59514e1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e59514e2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e59514e3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:88",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59514e4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59514e5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "93",
        "name": "Phan Văn Thái Qúy",
        "cty": "ABC",
        "hotline": "82178370"
      },
      "customer": {
        "customerID": "93",
        "name": "Phan An Hồng",
        "phone": "48382909",
        "address": "Hà Nội",
        "cmnd": "38542683"
      },
      "fileURL": "talk93.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "33s",
      "date": "28/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e59514fe"
            }
          ],
          "_id": "62ecb57027473f93e59514fd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951500"
            }
          ],
          "_id": "62ecb57027473f93e59514ff"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951502"
            }
          ],
          "_id": "62ecb57027473f93e5951501"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951504"
            }
          ],
          "_id": "62ecb57027473f93e5951503"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951506"
            }
          ],
          "_id": "62ecb57027473f93e5951505"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951508"
            }
          ],
          "_id": "62ecb57027473f93e5951507"
        }
      ]
    },
    "_id": "62ecb57027473f93e59514f2",
    "audioID": 93,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59514f3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59514f4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e59514f5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59514f6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e59514f7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e59514f8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e59514f9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59514fa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e59514fb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e59514fc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "94",
        "name": "Trần Quốc Ánh",
        "cty": "ABC",
        "hotline": "14081950"
      },
      "customer": {
        "customerID": "94",
        "name": "Phan Dương Duy",
        "phone": "66618530",
        "address": "Hà Nội",
        "cmnd": "45784565"
      },
      "fileURL": "talk94.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "457s",
      "date": "30/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951515"
            }
          ],
          "_id": "62ecb57027473f93e5951514"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951517"
            }
          ],
          "_id": "62ecb57027473f93e5951516"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951519"
            }
          ],
          "_id": "62ecb57027473f93e5951518"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595151b"
            }
          ],
          "_id": "62ecb57027473f93e595151a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595151d"
            }
          ],
          "_id": "62ecb57027473f93e595151c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595151f"
            }
          ],
          "_id": "62ecb57027473f93e595151e"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951509",
    "audioID": 94,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595150a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595150b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595150c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595150d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595150e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595150f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951510"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951511"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951512"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951513"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "95",
        "name": "Phan Dương Thái Qúy",
        "cty": "ABC",
        "hotline": "24931293"
      },
      "customer": {
        "customerID": "95",
        "name": "Lê Quốc Khánh",
        "phone": "24493504",
        "address": "Hà Nội",
        "cmnd": "23100678"
      },
      "fileURL": "talk95.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "293s",
      "date": "10/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595152c"
            }
          ],
          "_id": "62ecb57027473f93e595152b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595152e"
            }
          ],
          "_id": "62ecb57027473f93e595152d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951530"
            }
          ],
          "_id": "62ecb57027473f93e595152f"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951532"
            }
          ],
          "_id": "62ecb57027473f93e5951531"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951534"
            }
          ],
          "_id": "62ecb57027473f93e5951533"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951536"
            }
          ],
          "_id": "62ecb57027473f93e5951535"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951520",
    "audioID": 95,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951521"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951522"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951523"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951524"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951525"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951526"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951527"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951528"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951529"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595152a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "96",
        "name": "Trương Văn Hồng",
        "cty": "ABC",
        "hotline": "73785770"
      },
      "customer": {
        "customerID": "96",
        "name": "Phạm Minh Cảnh",
        "phone": "71103656",
        "address": "Hà Nội",
        "cmnd": "48025671"
      },
      "fileURL": "talk96.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "343s",
      "date": "5/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951543"
            }
          ],
          "_id": "62ecb57027473f93e5951542"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951545"
            }
          ],
          "_id": "62ecb57027473f93e5951544"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951547"
            }
          ],
          "_id": "62ecb57027473f93e5951546"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951549"
            }
          ],
          "_id": "62ecb57027473f93e5951548"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595154b"
            }
          ],
          "_id": "62ecb57027473f93e595154a"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595154d"
            }
          ],
          "_id": "62ecb57027473f93e595154c"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951537",
    "audioID": 96,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951538"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951539"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595153a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595153b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e595153c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595153d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595153e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e595153f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951540"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951541"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "97",
        "name": "Phan Minh Cảnh",
        "cty": "ABC",
        "hotline": "14472540"
      },
      "customer": {
        "customerID": "97",
        "name": "Phạm An Hồng",
        "phone": "75127611",
        "address": "Hà Nội",
        "cmnd": "87084171"
      },
      "fileURL": "talk97.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "344s",
      "date": "16/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595155a"
            }
          ],
          "_id": "62ecb57027473f93e5951559"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595155c"
            }
          ],
          "_id": "62ecb57027473f93e595155b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595155e"
            }
          ],
          "_id": "62ecb57027473f93e595155d"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951560"
            }
          ],
          "_id": "62ecb57027473f93e595155f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951562"
            }
          ],
          "_id": "62ecb57027473f93e5951561"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951564"
            }
          ],
          "_id": "62ecb57027473f93e5951563"
        }
      ]
    },
    "_id": "62ecb57027473f93e595154e",
    "audioID": 97,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595154f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951550"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:22",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951551"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:33",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e5951552"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951553"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951554"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951555"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951556"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951557"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:99",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e5951558"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "98",
        "name": "Trương Minh Quyền",
        "cty": "ABC",
        "hotline": "19216781"
      },
      "customer": {
        "customerID": "98",
        "name": "Bùi Thị Khánh",
        "phone": "95531107",
        "address": "Hà Nội",
        "cmnd": "39846342"
      },
      "fileURL": "talk98.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "563s",
      "date": "25/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951571"
            }
          ],
          "_id": "62ecb57027473f93e5951570"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951573"
            }
          ],
          "_id": "62ecb57027473f93e5951572"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951575"
            }
          ],
          "_id": "62ecb57027473f93e5951574"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951577"
            }
          ],
          "_id": "62ecb57027473f93e5951576"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e5951579"
            }
          ],
          "_id": "62ecb57027473f93e5951578"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595157b"
            }
          ],
          "_id": "62ecb57027473f93e595157a"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951565",
    "audioID": 98,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:00",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951566"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "đợi"
        },
        "_id": "62ecb57027473f93e5951567"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951568"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951569"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595156a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "thì anh đi chứ anh đâu biết đâu"
        },
        "_id": "62ecb57027473f93e595156b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:66",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e595156c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:77",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595156d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e595156e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e595156f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "99",
        "name": "Ngô Minh Ánh",
        "cty": "ABC",
        "hotline": "65416641"
      },
      "customer": {
        "customerID": "99",
        "name": "Bùi Dương Cảnh",
        "phone": "12246381",
        "address": "Hà Nội",
        "cmnd": "72028024"
      },
      "fileURL": "talk99.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "483s",
      "date": "19/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951588"
            }
          ],
          "_id": "62ecb57027473f93e5951587"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595158a"
            }
          ],
          "_id": "62ecb57027473f93e5951589"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e595158c"
            }
          ],
          "_id": "62ecb57027473f93e595158b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e595158e"
            }
          ],
          "_id": "62ecb57027473f93e595158d"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ecb57027473f93e5951590"
            }
          ],
          "_id": "62ecb57027473f93e595158f"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e5951592"
            }
          ],
          "_id": "62ecb57027473f93e5951591"
        }
      ]
    },
    "_id": "62ecb57027473f93e595157c",
    "audioID": 99,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595157d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:11",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e595157e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595157f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "em một xíu"
        },
        "_id": "62ecb57027473f93e5951580"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:44",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951581"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:55",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951582"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951583"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951584"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951585"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e5951586"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "100",
        "name": "Ngô Khánh Cảnh",
        "cty": "ABC",
        "hotline": "49192603"
      },
      "customer": {
        "customerID": "100",
        "name": "Nguyễn Hữu Quyền",
        "phone": "95259905",
        "address": "Hà Nội",
        "cmnd": "93671659"
      },
      "fileURL": "talk100.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "457s",
      "date": "6/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e595159f"
            }
          ],
          "_id": "62ecb57027473f93e595159e"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59515a1"
            }
          ],
          "_id": "62ecb57027473f93e59515a0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59515a3"
            }
          ],
          "_id": "62ecb57027473f93e59515a2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ecb57027473f93e59515a5"
            }
          ],
          "_id": "62ecb57027473f93e59515a4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59515a7"
            }
          ],
          "_id": "62ecb57027473f93e59515a6"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ecb57027473f93e59515a9"
            }
          ],
          "_id": "62ecb57027473f93e59515a8"
        }
      ]
    },
    "_id": "62ecb57027473f93e5951593",
    "audioID": 100,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:00",
          "content": "xin chào"
        },
        "_id": "62ecb57027473f93e5951594"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:11",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951595"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:22",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951596"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:33",
          "content": "nó được tháng ròi"
        },
        "_id": "62ecb57027473f93e5951597"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:44",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e5951598"
      },
      {
        "voiceLayer": {
          "voiceNumber": "1",
          "duration": "00:00:55",
          "content": "rồi anh đợi em đăng ký chính chủ chưa"
        },
        "_id": "62ecb57027473f93e5951599"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:66",
          "content": "ừ"
        },
        "_id": "62ecb57027473f93e595159a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:77",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595159b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:88",
          "content": "dạ anh đang có vay bênh bênh em ạ"
        },
        "_id": "62ecb57027473f93e595159c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "2",
          "duration": "00:00:99",
          "content": "phải"
        },
        "_id": "62ecb57027473f93e595159d"
      }
    ],
    "__v": 0
  }
]

export default FILE1