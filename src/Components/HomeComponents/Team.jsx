import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("/Team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h1 className="text-xl font-bold text-[#FF3811]">Team</h1>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p className="text-base font-normal text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 mb-12">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team}></TeamCard>
        ))}
      </div>
    </div>
  );
};

export default Team;
