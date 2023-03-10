import { TextChannel } from 'discord.js';

export type EventsType = {
	isNotNSFWChannel: [channel: TextChannel];
	isCooldown: [timeLeft: number];
	error: [error: unknown];
	onApplicationCmdReload: [amount: number];
	onApplicationCmdReloaded: [amount: number];
	onGuildCmdReload: [amount: number];
	onGuildCmdReloaded: [amount: number];
};
