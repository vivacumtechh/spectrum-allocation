export const spectrumData = [
  {
    id: "B3",
    title: "Band B3 (FDD)",
    freqStart: "1805 / 1710 MHz",
    freqEnd: "1880 / 1785 MHz",
    blocks: [
      {
        type: "end",
        label: "end",
        width: 15,
        details: `<strong>Operated by:</strong><br>end<br><br>
                      <strong>Bandwidth:</strong><br>15 MHz (1830 - 1832.4 MHz downlink and 1735 - 1747.4 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Details:</strong><br>mainly used in suburban<br><br>
                      <strong>Used for:</strong><br>2G GSM: ARFCN 640, 643`
      },
      ]
  },

  {
    id: "B20",
    title: "Band B20 (FDD)",
    freqStart: "791 / 832 MHz",
    freqEnd: "821 / 862 MHz",
    blocks: [
      {
        type: "tele2",
        label: "Tele2",
        width: 10,
        details: `<strong>Operated by:</strong><br>end<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (811 - 821 MHz downlink and 852 - 862 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-07-01<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 6400`
      }
    ]
  },

  {
    id: "B28",
    title: "Bands B28, n28 (FDD)",
    freqStart: "758 / 703 MHz",
    freqEnd: "788 / 733 MHz",
    blocks: [
      {
        type: "tele2",
        label: "Tele2",
        width: 10,
        details: `<strong>Operated by:</strong><br>end<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (783 - 788 MHz downlink and 728 - 733 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 9485`
      }
    ]
 
  },

  {
    id: "B38",
    title: "Band B38 (TDD)",
    freqStart: "2570 MHz",
    freqEnd: "2620 MHz",
    blocks: [
      {
        type: "tele2",
        label: "tele2",
        width: 30,
        details: `<strong>Operated by:</strong><br>end<br><br>
                      <strong>Bandwidth:</strong><br>30 MHz (2615 - 2620 MHz)<br><br>
                      <strong>Valid until:</strong><br>2030-01-15<br><br>
                      <strong>Details:</strong><br>Unused<br>no kinta4i for b7`
      }
    ]
  },

  {
    id: "B41",
    title: "Band B41, n41 (TDD)",
    freqStart: "2300 MHz",
    freqEnd: "2400 MHz",
    blocks: [
      {
        type: "tele2",
        label: "Tele2",
        width: 40,
        details: `<strong>Bandwidth:</strong><br>40 MHz (2390 - 2400 MHz)`
      }
    ]
  },

  {
    id: "B258",
    title: "Band n258 (TDD)",
    freqStart: "21300 MHz",
    freqEnd: "26100 MHz",
    blocks: [
      {
        type: "tele2",
        label: "Tele2",
        width: 400,
        details: `<strong>Operated by:</strong><br>end<br><br>
                      <strong>Bandwidth:</strong><br>400 MHz (3400 - 3500 MHz)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
       }
    ]
  }
];
