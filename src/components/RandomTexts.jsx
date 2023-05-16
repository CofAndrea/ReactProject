const randomTexts = [
    'Relax your neck and shoulders. Keeping your mouth closed, inhale slowly through your nose for 2 counts. Pucker or purse your lips as though you were going to whistle. Exhale slowly by blowing air through your pursed lips for a count of 4.',    
    'Choose a comfortable seated position. Breathe in and out through your nose. Count during each inhale and exhale to make sure they are even in duration. Alternatively, choose a word or short phrase to repeat during each inhale and exhale. You can add a slight pause for breath retention after each inhale and exhale if you feel comfortable.',
    'Inhale for a count of 5. Exhale for a count of 5. Continue this breathing pattern for at least a few minutes. ',
    'While standing or sitting, draw your elbows back slightly to allow your chest to expand. Take a deep inhalation through your nose. Retain your breath for a count of 5. Slowly release your breath by exhaling through your nose. ',
] 
const formattedTexts = randomTexts.map(text => text.replace(/\.\s+/g, '.\n'));
export default formattedTexts