export interface SessionChunk {
    time: number;
    size: number;
    data: string;
}

export interface Session {
    command: string;
    start_time: number;
    end_time: number;
    duration: number;
    chunks: SessionChunk[];
}

export interface SessionFile {
    metadata: {
        version: string;
        interactive_mode: boolean;
        timestamp: number;
    };
    sessions: Session[];
}

export interface Bookmark {
    id: string;
    name: string;
    time: number;
    sessionIndex: number;
    chunkIndex: number;
}

export interface PlaybackState {
    isPlaying: boolean;
    currentTime: number;
    totalDuration: number;
    playbackSpeed: number;
    currentSessionIndex: number;
    currentChunkIndex: number;
}

export interface TimelineCommand {
    sessionIndex: number;
    command: string;
    startTime: number;
    position: number;
}

export interface Routing {
    route: 'home' | 'play';
    sessionId?: string;
}