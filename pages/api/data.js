import experience from './experience.json';

export default function handler(req, res) {
	res.status(200).json(experience);
}
