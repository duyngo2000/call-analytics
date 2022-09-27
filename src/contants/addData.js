export const tadaData = (data) => {
  return {
    audioID: data,
    audioCredit: {
      fileURL: `talk${data}.mp3`,
      type: "audio",
      agent: {
        agentID: data,
        name: "Đặng Thị An",
        cty: "ABC",
        hotline: 35424786,
      },
      customer: {
        customerID: data,
        name: "Phạm Hữu Thái Qúy",
        phone: 69256624,
        address: "Hà Nội",
        cmnd: 25400346,
      },
      callHoldDration: "3s",
      callDuration: "382s",
      date: "1/9/2022",
      time_start: "10:40:20",
    },
    audioText: [
      {
        voiceLayer: {
          voiceNumber: 2,
          content: "thì anh đi chứ anh đâu biết đâu",
          duration: "00:00:00",
        },
      },
      {
        voiceLayer: {
          voiceNumber: 2,
          content: "rồi anh đợi em đăng ký chính chủ chưa",
          duration: "00:00:11",
        },
      },
      {
        voiceLayer: {
          voiceNumber: 2,
          content: "nó được tháng ròi",
          duration: "00:00:22",
        },
      },
      {
        voiceLayer: {
          voiceNumber: 1,
          content: "nó được tháng ròi",
          duration: "00:00:33",
        },
      },
      {
        voiceLayer: { voiceNumber: 2, content: "đợi", duration: "00:00:44" },
      },
      {
        voiceLayer: {
          voiceNumber: 1,
          content: "em một xíu",
          duration: "00:00:55",
        },
      },
      {
        voiceLayer: {
          voiceNumber: 2,
          content: "dạ anh đang có vay bênh bênh em ạ",
          duration: "00:00:66",
        },
      },
      {
        voiceLayer: {
          voiceNumber: 2,
          content: "xin chào",
          duration: "00:00:77",
        },
      },
      {
        voiceLayer: {
          voiceNumber: 2,
          content: "dạ anh đang có vay bênh bênh em ạ",
          duration: "00:00:88",
        },
      },
      { voiceLayer: { voiceNumber: 2, content: "ừ", duration: "00:00:99" } },
    ],
    audioMatch: {
      rules: [
        {
          name: "BR_Wrongnumber",
          key: [{ agent: "hết hạn", customer: "anh đâu biết đâu" }],
        },
        {
          name: "BR_Wrongnumber",
          key: [{ agent: "hết hạn", customer: "đâu biết" }],
        },
        {
          name: "BR_Wrongnumber",
          key: [{ agent: "nợ chưa trả", customer: "đâu biết" }],
        },
        {
          name: "CollAgentScriptAdherence",
          key: [{ agent: "hết hạn", customer: "đâu biết" }],
        },
        {
          name: "BR_Wrongnumber",
          key: [{ agent: "số tiền", customer: "đâu biết" }],
        },
        {
          name: "BR_Wrongnumber",
          key: [{ agent: "sao anh chưa thanh toán", customer: "anh đâu biết" }],
        },
      ],
    },
  }
}
