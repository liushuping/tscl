declare module system {
	export interface Comparable<T> {
		compareTo(other: T): number;
	}
	
	export interface Cloneable<T> {
		clone(): T;
	}
	
	export interface Equatable<T> {
		equals(other: T): boolean;
	}
	
	export interface Disposable<T> {
		dispose(): void;
	}
	
	export interface Observer<T> {
		onNext(value: T): void;
		onError(error: Error): void;
		onCompleted(): void;
	}
	
	export interface Observable<T> {
		subscribe(observer: Observer<T>): Disposable<any>;
	}
	
	export interface Progress<T> {
		report(value: T): void; 
	}
	
	export enum DateTimeKin {
		Local,
		Unspecified,
		Utc
	}
	
	export enum DayOfWeek {
		Sunday,
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Saturday
	}
	
	export enum UriKind {
		Absolute,
		Relative,
		RelativeOrAbsolute
	}
	
	export enum UriPartial {
		Authority,
		Path,
		Query,
		Scheme
	}
	
	export enum UriFormat {
		SafeUnescaped,
		Unescaped,
		UriEscaped
	}
	
	export enum UriHostNameType {
		Basic,
		Dns,
		IPv4,
		IPv6,
		Unknown
	}
	
	export class Guid {
		constructor(g: string);
	}
}