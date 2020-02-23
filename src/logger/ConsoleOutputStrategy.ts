import Level from "@/logger/Level";
import OutputStrategy from "@/logger/OutputStrategy";

class ConsoleOutputStrategy implements OutputStrategy {

	private static getNow(): string {
		const now = new Date();

		return now.getUTCFullYear()
			+ "-"
			+ now.getUTCMonth()
			+ ":"
			+ now.getUTCDate()
			+ ":"
			+ now.getUTCHours()
			+ ":"
			+ now.getUTCMinutes()
			+ ":"
			+ now.getUTCSeconds()
			+ ":"
			+ now.getUTCMilliseconds();
	}

	public log(logName: string, level: Level, payload: any, stacked?: Error | boolean): void {
		if (level === Level.DISABLED) {
			return;
		}

		const preamble: string = ConsoleOutputStrategy.getNow() + " " + level + " [" + logName + "]";
		const shortArgs: boolean = payload instanceof Error;
		const printFullStack: boolean = !(stacked instanceof Error) ? (null !== stacked ? stacked : false) : false;

		if (level >= Level.WARN) {
			const logMsg: string = (shortArgs ? payload.stack : payload);
			const errMsg: string = (stacked instanceof Error) ? stacked.stack : "";
			const secondPreamble = (shortArgs ? "" : ((stacked) ? " - %s" : ""));

			switch (level) {
				case Level.WARN:
					// tslint:disable-next-line
					console.warn("%c" + preamble + secondPreamble, "color:#ff9400;", logMsg, errMsg);
					break;

					case Level.ERROR:
				case Level.FATAL:
				default:
					// tslint:disable-next-line
					console.error(preamble + secondPreamble, logMsg, errMsg);
					break;
			}
		} else {
			switch (level) {
				case Level.TRACE:
					if (printFullStack) {
						// tslint:disable-next-line
						console.log("%c" + preamble, "color:#00752d;", payload);
					} else {
						// tslint:disable-next-line
						console.log("%c" + preamble, "color:#ff9400;", payload);
					}
					break;

				case Level.DEBUG:
					// tslint:disable-next-line
					console.log("%c" + preamble, "color:#00752d;", payload);
					break;

				case Level.INFO:
					// tslint:disable-next-line
					console.log("%c" + preamble, "color:#2d57ca;", payload);
					break;

				default:
					// tslint:disable-next-line
					console.log(preamble, payload);
					break;
			}
		}
	}

}

export default ConsoleOutputStrategy;
