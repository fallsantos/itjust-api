import LinkModel, { ILinkModel } from '../models/Link'

import { Link } from '../types/link'

async function findByCode (code: string) {
  const link = await LinkModel?.findOne<ILinkModel>({ where: { code } })

  if (!link) {
    return null
  }

  return link
}

async function add (link: Link) {
  return await LinkModel?.create<ILinkModel>(link)
}

async function hit (code: string) {
  const link = await findByCode(code)

  if (!link) {
    return null
  }

  link.hits!++// ! = Me respnsabilizo pelo uso. :P

  await link.save()

  return link
}

export default {
  findByCode,
  add,
  hit
}
