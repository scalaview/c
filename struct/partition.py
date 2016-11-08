def main():
  ary = [6, 3, 8, 2, 5, 9, 4, 5, 1, 7]
  quickSort(ary, 0, len(ary))
  print(ary)

  ary1 = [6, 3, 8, 2, 5, 9, 4, 5, 1, 7]

  quickSortPop(ary1, 0, len(ary1))
  print(ary1)

def quickSort(ary, low, hig):
  if hig - low < 2:
    return
  midle = partition(ary, low, hig-1)
  print("%s %s %s"%(low, midle, hig))
  quickSort(ary, low, midle)
  quickSort(ary, midle+1, hig)
  print(ary)

def quickSortPop(ary, low, hig):
  st = []
  if low<hig:
    midle = partition(ary, low, hig-1)
    if low<midle:
      st.append(low)
      st.append(midle)
    if midle+1<hig:
      st.append(midle+1)
      st.append(hig)
    print(st)
    while st:
      if st:
        h = st.pop()
        l = st.pop()
      m = partition(ary, l, h-1)
      if l<m:
        st.append(l)
        st.append(m)
      if m+1<h:
        st.append(m+1)
        st.append(h)
      print(st)


def partition(ary, low, hig):
  if hig - low <= 0:
    return low
  poiv = ary[low]
  while low<hig:
    while low<hig and ary[hig] >= poiv :
      hig=hig-1
    ary[low]=ary[hig]
    while low<hig and ary[low] <= poiv :
      low=1+low
    ary[hig]=ary[low]
  ary[low]=poiv
  return low

if __name__ == '__main__':
  main()