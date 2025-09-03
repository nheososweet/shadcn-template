export const normalizeString = (params?: Record<string, unknown>) => {
    if (!params) return ''

    const entries = Object.entries(params || {});

    const sortedParams = entries
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
        .filter(([key, value]) => {
            if (value === undefined || value === null || value === '') {
                return false;
            }
            if (Array.isArray(value) && value.length === 0) {
                return false;
            }
            if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
                return false;
            }
            return true;
        })
        .map(([key, value]) => {
            const encodedValue = Array.isArray(value)
                ? value.map(v => encodeURIComponent(String(v)))
                    .join(',')
                : encodeURIComponent(String(value));

            return `${encodeURIComponent(key)}=${encodedValue}`;
        })
        .join('&');

    return sortedParams;
}