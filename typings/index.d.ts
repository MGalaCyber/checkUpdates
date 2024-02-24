interface PackageCheckerOptions {
    packageName: string;
    currentVersion: string;
}

declare const packageChecker: (options: PackageCheckerOptions) => string;

export = packageChecker;