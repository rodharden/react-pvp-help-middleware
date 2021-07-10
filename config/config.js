var config = {
    local: {
        mode: 'local',
        port: 3001
    },
    staging: {
        mode: 'staging',
        port: 4000
    },
    production: {
        mode: 'production',
        port: 5000
    }
}
export default function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}