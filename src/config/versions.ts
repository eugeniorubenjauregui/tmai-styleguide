/**
 * Version Management System for Design Tokens
 * Allows multiple versions of tokens to coexist
 */

import type { DesignTokens } from '../tokens';
import { tokens as v1Tokens } from '../tokens';

export type TokenVersion = 'v1' | 'v2' | 'v3';

export interface VersionRegistry {
  [key: string]: DesignTokens;
}

class VersionManager {
  private versions: VersionRegistry = {
    v1: v1Tokens,
  };
  private currentVersion: TokenVersion = 'v1';

  /**
   * Register a new version of tokens
   */
  register(version: TokenVersion, tokens: DesignTokens): void {
    this.versions[version] = tokens;
  }

  /**
   * Get tokens for a specific version
   */
  getTokens(version?: TokenVersion): DesignTokens {
    const versionKey = version || this.currentVersion;
    if (!this.versions[versionKey]) {
      console.warn(
        `Version ${versionKey} not found, falling back to v1`
      );
      return this.versions.v1;
    }
    return this.versions[versionKey];
  }

  /**
   * Set the current active version
   */
  setCurrentVersion(version: TokenVersion): void {
    if (!this.versions[version]) {
      console.warn(
        `Version ${version} not found, cannot set as current`
      );
      return;
    }
    this.currentVersion = version;
  }

  /**
   * Get the current active version
   */
  getCurrentVersion(): TokenVersion {
    return this.currentVersion;
  }

  /**
   * List all available versions
   */
  listVersions(): TokenVersion[] {
    return Object.keys(this.versions) as TokenVersion[];
  }

  /**
   * Check if a version exists
   */
  hasVersion(version: TokenVersion): boolean {
    return version in this.versions;
  }
}

export const versionManager = new VersionManager();

// Export default tokens (current version)
export const getCurrentTokens = (): DesignTokens => {
  return versionManager.getTokens();
};

