"use client";

import { Answer } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import cluster0 from "./cluster0.png";
import cluster1 from "./cluster1.png";
import cluster2 from "./cluster2.png";
import cluster3 from "./cluster3.png";
import cluster4 from "./cluster4.png";

export default function Page() {
  const searchParams = useSearchParams();
  const data = JSON.parse(atob(searchParams.get("data")!)) as Answer[];

  let clusterNumber = 0;
  if (data[0] && data[0].answers) {
    clusterNumber = data[0].answers.reduce(
      (sum, answer) => sum + answer.value,
      0
    );
  }

  const clusterInfo: {
    [key: number]: { name: string; description: string; image: any };
  } = {
    0: {
      name: "Creative Free Spirit",
      description:
        "You are highly imaginative, open to new experiences, and thrives in creative pursuits. However, you might struggle with organization and reliability. You're outgoing and seek social interaction, but your assertiveness might overshadow consideration for others. This could lead to heightened sensitivity and emotional fluctuations",
      image: cluster0,
    },
    1: {
      name: "Conventional Planner and Nurturer",
      description:
        "You prefer routine, tends to be practical and detail-oriented, but might be less open to unconventional ideas. You are reliable, responsible, and considerate, valuing harmony and cooperation in relationships. You are more introverted and enjoy solitude. You are emotionally stable and don't experience high levels of anxiety or stress.",
      image: cluster1,
    },
    2: {
      name: "Energetic Social Butterfly",
      description:
        "You enjoy socializing and seek excitement, but you might lack organization and be less open to new ideas. You might come across as less considerate due to low agreeableness and may experience amotional fluctuations. However, you thrive in dynamic and energetic social settings.",
      image: cluster2,
    },
    3: {
      name: "Creative Perfectionist",
      description:
        "You are highly imaginative and creative while also being organized and detail-oriented. However, you might prefer solitude and quieter settings. You might not prioritize maintaining social harmony but are emotionally stable, experiencing fewer mood swings or anxieties.",
      image: cluster3,
    },
    4: {
      name: "Reserved and Anxious",
      description:
        "You might prefer routine and familiarity and might be less open to new experiences. You could struggle with organization and might not actively seek social interactions. It might also challenging for you to maintain harmonious relationships and could have a higher leveks of anxiety and stress.",
      image: cluster4,
    },
  };

  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-5xl text-center font-bold pt-16 pb-5">
        Your Personality Test Results
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={clusterInfo[clusterNumber].image}
          alt={"image"}
          style={{ width: "20%", height: "auto", marginTop: "20px" }}
        ></Image>
        <br />
        <h1>
          <b>{clusterInfo[clusterNumber].name}</b>
        </h1>
        <p className="text-center">{clusterInfo[clusterNumber].description}</p>
      </div>
    </main>
  );
}
