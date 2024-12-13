import TeamProps from "@/interfaces/TeamProps";

export const team_names = [
    "Thunderstrikers", "Iron Titans", "Blazing Falcons", "Shadow Panthers",
    "Silver Sparks", "Crimson Hawks", "Golden Gladiators", "Eclipse Warriors",
    "Storm Chasers", "Phantom Wolves", "Frost Blades", "Night Vortex",
    "Savage Predators", "Electric Pioneers", "Inferno Knights", "Mystic Raiders"
];

export const teams: TeamProps[] = team_names.map((name, seed) => ({
    seed, name, group_pts: 3
}));
