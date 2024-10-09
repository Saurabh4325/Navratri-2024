
const faces = [
    {
      id: 1,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=c862a5a3-6700-4b25-846f-3b7f253cfc48",
      alt: "Smiling woman with blonde hair"
    },
    {
      id: 2,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=307bd257-8f23-475d-a38b-f3f4822bbaa1",
      alt: "Man with curly hair looking at camera"
    },
    {
      id: 3,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=b500a7bd-c119-4eb7-ac6e-8234bf37eccf",
      alt: "Woman with red hair smiling"
    },
    {
      id: 4,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=21bf72f7-abe0-4329-9ecb-a7062101bbf5",
      alt: "Man with beard smiling"
    },
    {
      id: 5,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=4df78fb3-a3f5-4e85-94c6-ee8097bf1902",
      alt: "Woman with dark hair looking sideways"
    },
    {
      id: 6,
      
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=77b4f15c-8c22-4835-85d3-e39389c2c58e",
      alt: "Woman with curly hair smiling"
    },
    {
      id: 7,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=9e40dbdf-7788-4b5b-a968-772ba613a99e",
      alt: "Man with beard smiling"
    },
    {
      id: 8,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=a69523dc-4b95-4467-aef9-65ff241f14f5",
      alt: "Man with beard smiling"
    },
    {
      id: 9,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=4cf36b09-6a59-45cd-b91e-5cd7cc2900b1",
      alt: "Man with beard smiling"
    },
    {
      id: 10,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=483e3175-aa68-4b40-a124-23992eb3c3c9",
      alt: "Man with beard smiling"
    },
    {
      id: 11,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=17e3b4bf-8fb1-4969-8f71-f38b50e5d1c3",
      alt: "Man with beard smiling"
    },
    {
      id: 12,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=00e509e2-fb9b-4b97-93c8-3bf811b46f43",
      alt: "Man with beard smiling"
    },
    {
      id: 13,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=006e063f-b222-4a2d-8c2e-c56775119e40",
      alt: "Man with beard smiling"
    },
    {
      id: 14,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=e0704c83-f71a-4abe-8a47-c986a83d387b",
      alt: "Man with beard smiling"
    },
    {
      id: 15,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=ff0f4144-8ca2-47af-bf9a-9ba8967f03cc",
      alt: "Man with beard smiling"
    },
    {
      id: 16,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=4c7d2eaa-1e53-462b-8172-341dfb2f440d",
      alt: "Man with beard smiling"
    },
    {
      id: 17,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=db1b2c03-c403-4e6a-bf49-407f95303722",
      alt: "Man with beard smiling"
    },
    {
      id: 18,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=842022ad-b33a-4a19-9a46-cfab4c7e2791",
      alt: "Man with beard smiling"
    },
    {
      id: 19,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=8953cc4d-bcc3-47de-a105-397f26763ad7",
      alt: "Man with beard smiling"
    },
    {
      id: 20,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=2891987c-d9f3-46cd-959e-e05c457cb8fb",
      alt: "Man with beard smiling"
    },
    {
      id: 21,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=17b901e7-adb7-4709-9d92-5bda4f8764ea",
      alt: "Man with beard smiling"
    },
    {
      id: 22,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=83273c8b-2468-4c3e-b8c8-aea9e2acb8af",
      alt: "Man with beard smiling"
    },
    {
      id: 23,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=ec022ef8-0640-449f-b35f-d6929a899045",
      alt: "Man with beard smiling"
    },
    {
      id: 24,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=b0f9c781-aa10-4113-bd15-8adb7086a964",
      alt: "Man with beard smiling"
    },
    {
      id: 25,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=e1815832-9dd7-40a2-923e-47df1884eb36",
      alt: "Man with beard smiling"
    },
    {
      id: 26,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=02ee566c-4d84-495b-8140-7073bc6bdf12",
      alt: "Man with beard smiling"
    },
    {
      id: 27,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=8b151f2f-933a-4b83-9597-aca254293f0c",
      alt: "Man with beard smiling"
    },
    {
      id: 28,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=9a282775-ad4b-45cd-9a04-0eba4d377ab0",
      alt: "Man with beard smiling"
    },
    {
      id: 29,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=04c8a61d-a52f-42bb-9dc2-1abe92f3294b",
      alt: "Man with beard smiling"
    },
    {
      id: 30,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=d2b585e7-9aca-4bd0-84dd-0401a0dceed9",
      alt: "Man with beard smiling"
    },
    {
      id: 31,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=e8acfe07-4409-43b7-a4b5-4584bf7a7976",
      alt: "Man with beard smiling"
    },
    {
      id: 32,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=945ec7e6-a5d7-432c-8b81-9ae4eb2ff543",
      alt: "Man with beard smiling"
    },
    {
      id: 33,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=9a282775-ad4b-45cd-9a04-0eba4d377ab0",
      alt: "Man with beard smiling"
    },
    {
      id: 34,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=a3ad7878-7206-4c0f-ac90-bb4d8cf8816d",
      alt: "Man with beard smiling"
    },
    {
      id: 35,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=bf2cf6ff-55c7-49aa-bdfe-a4fdda4445e9",
      alt: "Man with beard smiling"
    },
    {
      id: 36,
      image: "https://ums.lpu.in/lpuums/DisplayImageForPowerBi.aspx?id=621b69c5-6d42-485f-9df3-fba9b8109c3d",
      alt: "Man with beard smiling"
    },
  ];

  export default faces