import TeamProps from "@/interfaces/TeamProps";

export const team_names = [
    "Savage Predators", "Frost Blades", "Night Vortex", "Golden Gladiators",
    "Crimson Hawks", "Silver Sparks", "Inferno Knights", "Electric Pioneers",
    "Blazing Falcons", "Iron Titans", "Mystic Raiders", "Storm Chasers",
    "Eclipse Warriors", "Thunderstrikers", "Phantom Wolves", "Shadow Panthers"
];

export const teams: TeamProps[] = team_names.map((name, seed) => ({
    seed, name, group_pts: (3 - seed % 4) * 3
}));
