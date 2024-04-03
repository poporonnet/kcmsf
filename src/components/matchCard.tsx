import { Card, Divider, Group, Text } from "@mantine/core";

interface MatchCardProps {
  id: string;
  matchType: "primary" | "final";
  teams: {
    right: {
      id: string;
      teamName: string;
      isMultiWalk: boolean;
      category: "elementary" | "open";
    };
    left: {
      id: string;
      teamName: string;
      isMultiWalk: boolean;
      category: "elementary" | "open";
    };
  };
  isFinished: boolean;
  courseIndex: number;
  matchIndex: number;
}

const MatchCardTeam = (props: {teamName: string, courseType: "左" | "右"}) => {
  return (
    <Group style={{display: "flex", fontSize: "2rem"}}>
      <Text size={"20px"} fw={800} truncate={"end"}>{props.courseType}</Text>
      <Text
        size={"32px"}
        fw={800}
      >
        {props.teamName}
      </Text>
    </Group>
  )
}

export const MatchCard = (props: MatchCardProps) => {
  return (
    <Card
      shadow="none"
      padding="sm"
      radius="md"
      m={"md"}
      withBorder
      variant={"outline"}
      style={{
        width: "20rem",
        height: "10rem",
        textAlign: "left"
      }}
    >
      <div>
        <Text fw={"800"} size={"md"} mb={".6rem"}>第{props.matchIndex+1}試合 {props.courseIndex+1}コース</Text>

        <MatchCardTeam teamName={props.teams["left"].teamName} courseType={"左"} />

        <Divider my={"sm"} variant={"dashed"} />

        <MatchCardTeam teamName={props.teams["right"].teamName} courseType={"右"} />
      </div>
    </Card>
  );
};
