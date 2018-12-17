import Logger from './Logger';
import Level from './Level';
import OutputStrategy from './OutputStrategy';
import ConsoleOutputStrategy from './ConsoleOutputStrategy';

class LoggerService {

	public static INSTANCE: LoggerService = new LoggerService();

	private level: Level;

	private outputStrategy: OutputStrategy;

	private levelNames: string[] = ['TRACE', 'DEBUG', ' INFO', 'ERROR', 'FATAL'];

	constructor() {
		this.level = Level.INFO;
		this.outputStrategy = new ConsoleOutputStrategy();
	}

	public log(logger: Logger, level: Level, payload: any, error?: Error): void {
		if (level >= this.level) {
			this.outputStrategy.log(logger, this.levelNames[level], payload, error);
		}
	}

	public setLevel(level: Level): void {
		this.level = level;
	}

	public isTrace(): boolean {
		return (Level.TRACE >= this.level);
	}

	public isDebug(): boolean {
		return (Level.DEBUG >= this.level);
	}

	public isInfo(): boolean {
		return (Level.INFO >= this.level);
	}

	public isError(): boolean {
		return (Level.ERROR >= this.level);
	}

	public isFatal(): boolean {
		return (Level.FATAL >= this.level);
	}

}

export default LoggerService;