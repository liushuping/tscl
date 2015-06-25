///<reference path="system.ts" />
module system.collections {
	export interface Enumerator<T> extends Disposable<any> {
		current: T;
	}
	
	export interface Enumerable<T> {
		getEnumerator(): Enumerator<T>;
	}
	
	export interface Collection<T> {
		count: number;
		isReadOnly: boolean;
		add(item: T): void;
		clear(): void;
		contains(item: T): boolean;
		copyTo(array: T[], arrayIndex: number): void;
		remove(item: T): boolean;
	}
	
	export class KeyValuePair<K, V> {
		constructor (public key: K, public value: V) {}
		
		toString() {
			//TODO
		}
	}
	
	export interface Comparer<T> {
		compare(x: T, y: T): number;
	}
	
//	export interface Dictionary<K, V> extends Collection<KeyValuePair<K, V>> {
//		keys: Collection<K>;
//		values: Collection<V>;
//		containsKey(key: K): boolean;
//		add(key: K, value: V): void;
//		remove(key: K): boolean;
//		getValue(key: K): V;
//	}
}