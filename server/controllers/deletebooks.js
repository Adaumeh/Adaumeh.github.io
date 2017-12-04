exports.deleteAll = (req, res) => {
  if (process.env.NODE_ENV === 'test') {
    books.truncate({ cascade: true, restartIdentity: true }).then(() => res.status(204).send({}));
  } else {
    res.status(403).send({ message: 'Whoa there' });
  }
};